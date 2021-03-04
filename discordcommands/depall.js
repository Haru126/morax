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
  name: 'alldep',
  description: 'deposit all',
  execute(message, args){

    function depAll(message) {
  var username = message.author.username;
let guildPrefix = prefix.getPrefix(message.guild.id);
  var displayAvatarURL = message.author.displayAvatarURL();
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
      } else if(rows[0].mora == 0){
        const embed = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL())
         .setDescription(`You don't have any Mora to deposit!`)
        .setColor(`#E8C215`)
        message.channel.send(embed)
      } else {
        if (rows[0].mora > 0) {
          var currentMora = 0;
          var bank = rows[0].bank + rows[0].mora;
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
          const depall2embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`Sucessfully deposited ${rows[0].mora}<:mora:808492540100608041> into your inventory`)
        .setFooter(`Do ${guildPrefix}bal to check your balance!`)
        .setTimestamp()
      .setColor(`#E8C215`)
      message.channel.send(depall2embed);
        }
      }
      db.query(sql, console.log);
      
    }
  );
}depAll(message)
  }
}