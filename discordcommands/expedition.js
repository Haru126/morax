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
  name: "expedition",
  description: "",
  execute(message, args) {
    var userId = message.author.id;
    let guildPrefix = prefix.getPrefix(message.guild.id);
    var username = message.author.username;
    var displayAvatarURL = message.author.displayAvatarURL();
    db.query(
      "SELECT * FROM Expedition where userid = " + message.author.id,
      (err, rows) => {
        db.query(
          "SELECT * FROM Economy where userid = " + message.author.id,
          (err, rows2) => {
            db.query(
              "SELECT * FROM Inventory where userid = " + message.author.id,
              (err, rows3) => {
                if (err) throw err;

                let sqlEconomy;
                let sqlInventory;
                var startDate = new Date().toMysqlFormat();
                if (!rows.length < 1) {
                  var resetTime =
                    (stringToDate(startDate) -
                      stringToDate(rows[0].ResetTime.toMysqlFormat())) /
                    1000;
                  if (resetTime > 86400) {
                    var expiLevel = rows[0].ExpeditionLevel;
                    var attempts = attempts(expiLevel);
                    sqlInventory =
                      "UPDATE Inventory SET" +
                      "ResetTime=" +
                      startDate +
                      ",ExpeditionAttempt=" +
                      attempts +
                      " WHERE userid='" +
                      message.author.id +
                      "'";

                    const embed = new Discord.MessageEmbed()
                      .setAuthor("Attempts has been reset! Please Try Again")
                      .setColor("#E8C215");
                    message.channel.send(embed);
                    db.query(sqlInventory, console.log);
                  } else {
                    if (!rows.length < 1) {
                      var mora = 0;
                      var seconds =
                        (stringToDate(startDate) -
                          stringToDate(
                            rows[0].ExpeditionTime.toMysqlFormat()
                          )) /
                        1000;
                      if (seconds > 3600 && rows[0].ExpeditionAttempt != 0 && rows3[0].MineTicket != 0) {
                        var expiLevel = rows[0].ExpeditionLevel;
                        var mora = parseFloat(level(expiLevel));
                        var iron = parseFloat(ironChunk());
                        var crystal = parseFloat(crystalOre());
                        var attempt = rows[0].ExpeditionAttempt - 1;
                        const embed = new Discord.MessageEmbed()
                          .setDescription(
                            "Your hero went on a expedition! You Received the following:"
                          )
                          .setAuthor("Expedition Report")
                          .addFields(
                            {
                              name: "Mora",
                              value: mora,
                              inline: false
                            },
                            {
                              name: "Iron Chunk",
                              value: iron,
                              inline: false
                            },
                            {
                              name: "Crystal",
                              value: crystal,
                              inline: false
                            }
                          )
                          .setColor("#E8C215");
                        message.channel.send(embed);
                        mora = mora + rows2[0].mora;
                        var newIron = iron + parseFloat(rows3[0].IronChunk);
                        var newCrystal = crystal + parseFloat(rows3[0].Crystal);

                        sqlEconomy =
                          "UPDATE Economy SET" +
                          " mora=" +
                          mora +
                          " WHERE userid='" +
                          message.author.id +
                          "'";
                        sqlInventory =
                          "UPDATE Inventory SET" +
                          " IronChunk=" +
                          newIron +
                          ",Crystal=" +
                          newCrystal +
                          " WHERE userid='" +
                          message.author.id +
                          "'";
                        let sqlExpedition =
                          "UPDATE Expedition SET " +
                          "ExpeditionTime='" +
                          startDate +
                          "', ExpeditionAttempt=" +
                          attempt +
                          " WHERE userid='" +
                          message.author.id +
                          "'";
                        db.query(sqlEconomy, console.log);
                        db.query(sqlInventory, console.log);
                        db.query(sqlExpedition, console.log);
                      } else {
                        var sec = 3600 - seconds;
                        const embed = new Discord.MessageEmbed()
                          .setAuthor(
                            "You can't go on to a new expedition! Please wait for " +
                              sec +
                              " seconds"
                          )
                          .setColor("#E8C215");
                        message.channel.send(embed);
                      }
                    }
                  }
                } else {
                  let sqlExpedition =
                    "INSERT INTO Expedition (userid) VALUES ('" +
                    message.author.id +
                    "')";
                  const embed = new Discord.MessageEmbed()
                    .setAuthor(
                      "Preparing your Hero for the First Expedition. Please Try Again after an hour!"
                    )
                    .setColor("#E8C215");
                  message.channel.send(embed);
                  db.query(sqlExpedition, console.log);
                }
              }
            );
          }
        );
      }
    );
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomMora(max, min) {
  return Math.floor(Math.random() * Math.floor(max) + min);
}

function stringToDate(s) {
  var dateParts = s.split(" ")[0].split("-");
  var timeParts = s.split(" ")[1].split(":");
  var d = new Date(dateParts[0], --dateParts[1], dateParts[2]);
  d.setHours(timeParts[0], timeParts[1], timeParts[2]);

  return d;
}
function ironChunk() {
  var odds = getRandomInt(100);
  if (odds < 40) {
    return 1;
  } else {
    return 0;
  }
}

function crystalOre() {
  var odds = getRandomInt(100);
  if (odds < 5 && isThegn()) {
    return 1;
  } else {
    return 0;
  }
}

function level(expiLevel) {
  switch (expiLevel) {
    case 1:
      return getRandomMora(2000, 1000);
      break;
    case 2:
      return getRandomMora(4000, 2000);
      break;
    case 3:
      return getRandomMora(4500, 2500);
      break;
    case 4:
      return getRandomMora(5500, 3000);
      break;
    case 5:
      return getRandomMora(6000, 3000);
      break;
    case 6:
      return getRandomMora(7000, 4000);
      break;
  }
}

function attempts(expiLevel) {
  switch (expiLevel) {
    case 1:
      return 2;
      break;
    case 2:
      return 2;
      break;
    case 3:
      return 3;
      break;
    case 4:
      return 3;
      break;
    case 5:
      return 4;
      break;
    case 6:
      return 5;
      break;
  }
}

function isThegn(message) {
  if (message.guild.id === '815151599575105558')
   {
    return true;
  }
  return false;
}
