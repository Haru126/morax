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
  name: 'withdraw',
  description: 'withdraw mora',
  execute(message, args){
  var username = message.author.username;
  var displayAvatarURL = message.author.displayAvatarURL();
  let guildPrefix = prefix.getPrefix(message.guild.id);
  var bal = message.content.replace(`${guildPrefix}with `, "");
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
      } else if(rows[0].bank < args[0]) {
        const embed = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL())
         .setDescription(`You don't have ${args[0]} <:mora:808492540100608041> in your inventory! `)
         .setColor('#E8c215')
         .setFooter(`You currently have ${rows[0].bank} in your inventory`)
        message.channel.send(embed)
      }
        else {
        if (bal <= rows[0].bank) {
          var bank = rows[0].bank - bal;
          var mora = rows[0].mora + parseFloat(bal);
          sql =
            "UPDATE Economy SET" +
            " bank=" +
            bank +
            "," +
            " mora=" +
            mora +
            " WHERE userid='" +
            message.author.id +
            "'";
                const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor('#E8C215')
      .setDescription(`Withdrew ${args[0]}<:mora:808492540100608041> from your inventory`)
      
      message.channel.send(embed);
        }
      }
      db.query(sql, console.log);

    }
  );


  }
  
}