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
  name: "bal",
  description: "check your balance",
  execute(message, args) {
    
    var username = message.author.username;
    var displayAvatarURL = message.author.displayAvatarURL();

    function embedBalance(msg, row, hasProfile, username, displayAvatarURL) {
      var mora = 0;
      var bank = 0;
      var primo = 0;
      if (hasProfile) {
        mora = row[0].mora;
        bank = row[0].bank;
        primo = row[0].primogems;
      }
      const embed = new Discord.MessageEmbed()
        .setColor("#E8C215")
        .setTitle("Balance")
        .setAuthor(username, displayAvatarURL)
        .setThumbnail(displayAvatarURL)
        .addFields(
          {
            name: "Mora <:mora:808492540100608041>",
            value: mora,
            inline: false
          },
          { name: "Bag <:bag:808492531456409621>", value: bank, inline: false },
          {
            name: "Genesis <:genesis:805434429286645772>",
            value: primo,
            inline: false
          }
        );
      msg.channel.send(embed);
    }

    function balance(message) {
      var username = message.author.username;
      var displayAvatarURL = message.author.displayAvatarURL();
      var userId = message.author.id;
      if (message.mentions.users.first()) {
        userId = message.mentions.users.first().id;
        username = message.mentions.members.first().user.username;
        displayAvatarURL = message.mentions.members
          .first()
          .user.displayAvatarURL();
      }
      db.query(
        "SELECT * FROM Economy where userid = " + userId,
        (err, rows) => {
          if (err) throw err;

          let sql;
          if (rows.length < 1) {
            embedBalance(message, rows, false, username, displayAvatarURL);
          } else {
            embedBalance(message, rows, true, username, displayAvatarURL);
          }
        }
      );
    }
    balance(message);
  }
}  