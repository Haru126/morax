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
  name: 'gift',
  description: 'gift mora to someone',
  execute(message, args){

      let guildPrefix = prefix.getPrefix(message.guild.id);
  var userId = message.mentions.users.first().id;
  var username = message.author.username;
  var displayAvatarURL = message.author.displayAvatarURL();
  var command = message.content.replace(`${guildPrefix}gift `, "");
  var split = command.split(" ");
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
        if (split[1] <= rows[0].mora) {
          db.query(
            "SELECT * FROM Economy where userid = " + userId,
            (err, rows) => {
              if (err) throw err;

              let sql;
              if (rows.length < 1) {
                const embed = new Discord.MessageEmbed()
                  .setAuthor("No Currency yet! try using the work function")
                  .setColor("#E8C215");
                message.channel.send(embed);
              } else {
                var currentMora = rows[0].mora + parseFloat(split[1]);
                sql =
                  "UPDATE Economy SET" +
                  " mora=" +
                  currentMora +
                  " WHERE userid='" +
                  userId +
                  "'";
              }

              db.query(sql, console.log);
            }
          );

          var currentMora = rows[0].mora - split[1];
          sql =
            "UPDATE Economy SET" +
            " mora=" +
            currentMora +
            " WHERE userid='" +
            message.author.id +
            "'";
        }
      }
      db.query(sql, console.log);
      message.channel.send("Update Success");
    }
  );


  }
}