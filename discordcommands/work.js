const Discord = require("discord.js");
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "eu02-sql.pebblehost.com",
  user: "customer_166639_morax",
  password: "-2dCmgj@RBVl@Zg9xJW7",
  database: "customer_166639_morax"
});
const ms = require('ms')
module.exports = {
  name: "work",
  description: "earn mora",
  execute(message, args) {
   
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }   
    
    function getRandomMora() {
      return Math.floor(Math.random() * Math.floor(300) + 100);
    }
    
    function stringToDate(s) {
      var dateParts = s.split(" ")[0].split("-");
      var timeParts = s.split(" ")[1].split(":");
      var d = new Date(dateParts[0], --dateParts[1], dateParts[2]);
      d.setHours(timeParts[0], timeParts[1], timeParts[2]);

      return d;
    }
    
    function work(message) {
      db.query(
        "SELECT * FROM Economy where userid = " + message.author.id,
        (err, rows) => {
          if (err) throw err;

          let sql;
          var startDate = new Date().toMysqlFormat();
          if (!rows.length < 1) {
            var seconds =
              (stringToDate(startDate) -
                stringToDate(rows[0].moraTime.toMysqlFormat())) /
              1000;
            if (seconds > 300) {
              var mora = getRandomMora();
              var expedition = expe();
              const embed = new Discord.MessageEmbed()
                .setDescription(
                  expedition + mora + " <:mora:808492540100608041>"
                )
                .setAuthor("Expedition Report")
                .setColor("#E8C215");
              message.channel.send(embed);
              mora = mora + rows[0].mora;
              sql =
                "UPDATE Economy SET" +
                " mora=" +
                mora +
                "," +
                " moraTime='" +
                startDate +
                "'" +
                " WHERE userid='" +
                message.author.id +
                "'";

              db.query(sql, console.log);
            } else {
              var sec = 300 - seconds
              var cd = sec
              const embed = new Discord.MessageEmbed()
                .setAuthor(
                  "You can't go on to a new expedition! Please wait for " + sec + " seconds"
                )
                .setColor("#E8C215");
              message.channel.send(embed);
            }
          } else {
            var mora = getRandomMora();
            sql =
              "INSERT INTO Economy (userid, mora, moraTime) VALUES ('" +
              message.author.id +
              "','" +
              mora +
              "','" +
              startDate +
              "')";

            db.query(sql, console.log);
            const embed = new Discord.MessageEmbed()
              .setColor("#E8C215")
              .setTitle(expedition() + mora + " <:mora:808492540100608041>")
              .setAuthor("Expedition Finished!");
            message.channel.send(embed);
          }
        }
      );
    }
    
 function expe() {
      switch (getRandomInt(9)) {
        case 1:
          return "You cleared a leyline and received: ";
          break;
        case 2:
          return "Amber gave you a task to scout Mondstadt. You received: ";
          break;
        case 3:
          return "You took Qiqi and Klee around Liyue. You received: ";
          break;
        case 4:
          return "You cleared a domain! You received: ";
          break;
        case 5:
          return "You ran some errands for Lisa. You received: ";
          break;
        case 6:
          return "Jean asked you to wipe out a nearby Hilichurl camp! You received: ";
          break;
        case 7:
          return "You chased Shiny Mora Squirrel! You received: ";
          break;
        case 8:
          return "Mona required your assistance and went to Starsnatch Cliff! You received: ";
          break;
        case 9:
          return "You ran into Albedo and started doing different experiments. You received: ";
          break;
        case 10:
          return "You patrolled around Stormterror! You received: ";
          break;
      }
    }
    work(message);
  }
}