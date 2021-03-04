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
  name: "rob",
  description: "rob someone",
  execute(message, args) {
    function getRobMora() {
      return Math.floor(Math.random() * Math.floor(150) + 50);
    }

    function rob(message) {
      var userId = message.mentions.users.first().id;
      var username = message.author.username;
      var displayAvatarURL = message.author.displayAvatarURL();
      var command = message.content.replace(prefix+"rob ", "");
      var startDate = new Date().toMysqlFormat();
      db.query(
        "SELECT * FROM Economy where userid = " + message.author.id,
        (err, rows) => {
          if (err) throw err;
          if (rows.length < 1) {
            const embed = new Discord.MessageEmbed()
              .setAuthor("No Currency yet! try using the work function")
              .setColor("#E8C215");
            message.channel.send(embed);
          } else {
            var mora = getRobMora();
            var seconds =
              (stringToDate(startDate) -
                stringToDate(rows[0].robTime.toMysqlFormat())) /
              1000;
            if (seconds > 360) {
              if (mora <= rows[0].mora) {
                db.query(
                  "SELECT * FROM Economy where userid = " + userId,
                  (err, rows) => {
                    if (err) throw err;

                    let sqlCurrent;
                    if (rows.length < 1) {
                      const embed = new Discord.MessageEmbed()
                        .setAuthor(
                          "No Currency yet! try using the work function"
                        )
                        .setColor("#E8C215");
                      message.channel.send(embed);
                    } else {
                      var currentMora = rows[0].mora - mora;
                      sqlCurrent =
                        "UPDATE Economy SET" +
                        " mora=" +
                        currentMora +
                        " WHERE userid='" +
                        userId +
                        "'";

                      db.query(sqlCurrent, console.log);
                    }

                    var newMora = rows[0].mora + mora;
                    let sqlNew =
                      "UPDATE Economy SET" +
                      " mora=" +
                      newMora +
                      "," +
                      " robTime='" +
                      startDate +
                      "'" +
                      " WHERE userid='" +
                      message.author.id +
                      "'";

                    db.query(sqlNew, console.log);

                    const embed = new Discord.MessageEmbed()
                      .setDescription(
                        "You stole " + mora + " <:mora:808492540100608041>"
                      )
                      .setAuthor("Steal Report")
                      .setColor("#E8C215");
                    message.channel.send(embed);
                  }
                );
              } else {
                const embed = new Discord.MessageEmbed()
                  .setAuthor(
                    "You cant rob the person! His mora is either hidden or the person is just Broke AF"
                  )
                  .setColor("#E8C215");
                message.channel.send(embed);
              }
            } else {
              const embed = new Discord.MessageEmbed()
                .setAuthor("You can't rob for awhile")
                .setColor("#E8C215");
              message.channel.send(embed);
            }
          }
        }
      );

      function stringToDate(s) {
        var dateParts = s.split(" ")[0].split("-");
        var timeParts = s.split(" ")[1].split(":");
        var d = new Date(dateParts[0], --dateParts[1], dateParts[2]);
        d.setHours(timeParts[0], timeParts[1], timeParts[2]);

        return d;
      }
    }
    rob(message);
  }
}