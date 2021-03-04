const Discord = require("discord.js");
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "eu02-sql.pebblehost.com",
  user: "customer_166639_morax",
  password: "-2dCmgj@RBVl@Zg9xJW7",
  database: "customer_166639_morax"
});
const prefix = require("discord-prefix");
module.exports = {
  name: "dep",
  description: "deposit how much you want",
  execute(message, args) {
    function dep(message) {
      let guildPrefix = prefix.getPrefix(message.guild.id);
      var username = message.author.username;
      var displayAvatarURL = message.author.displayAvatarURL();
      var bal = message.content.replace(guildPrefix+"dep ", "");
      db.query(
        "SELECT * FROM Economy where userid = " + message.author.id,
        (err, rows) => {
          if (err) throw err;

          let sql;
          if (rows.length < 1) {
            const embed = new Discord.MessageEmbed()
              .setAuthor("No Currency yet! try using the work function")
              .setColor("#E8C215");
            message.channel.send(embed);
          } else {
            if (bal <= rows[0].mora) {
              var currentMora = rows[0].mora - bal;
              var bank = parseFloat(rows[0].bank) + parseFloat(bal);
              sql =
                "UPDATE Economy SET" +
                " bank=" +
                bank +
                "," +
                " mora=" +
                currentMora +
                " WHERE userid='" +
                message.author.id +
                "'";

              db.query(sql, console.log);

              const embed = new Discord.MessageEmbed()
                .setDescription(
                  `Deposited ${bal} <:mora:808492540100608041> to your bag`
                )
                .setAuthor("Deposit Sucessful!", displayAvatarURL)
                .setColor("#E8C215")
              .setFooter(`Do ${guildPrefix}bal to check your balance!`)
              message.channel.send(embed);
            }
          }
        }
      );
    }
    dep(message);
  }
}