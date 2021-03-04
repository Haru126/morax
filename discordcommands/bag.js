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
  name: "bag",
  description: "check your balance",
  execute(message, args) {
    var username = message.author.username;
    var displayAvatarURL = message.author.displayAvatarURL();

    function embedBalance(msg, row, hasProfile, username, displayAvatarURL) {
      var MineTicket = 0;
      var RaffleTicket = 0;
      var BlessingOre = 0;
      var IronChunk = 0;
      var Crystal = 0;

      if (hasProfile) {
        MineTicket = row[0].MineTicket;
        RaffleTicket = row[0].RaffleTicket;
        BlessingOre = row[0].BlessingOre;
        IronChunk = row[0].IronChunk;
        Crystal = row[0].Crystal;
      }
      const embed = new Discord.MessageEmbed()
        .setColor("#E8C215")
        .setTitle("Inventory")
        .setAuthor(username, displayAvatarURL)
        .setThumbnail(displayAvatarURL)
        .addFields(
          {
            name: "Expedition Ticket <:expi:814706396653813831>",
            value: `${MineTicket}<:expi:814706396653813831>`,
            inline: false
          },
          { name: "Raffle Ticket", value: `${RaffleTicket}<:raffle:814706156836225066>`, inline: false },
          {
            name: "Blessing Ore <:blessing:814675681962885140>",
            value: BlessingOre,
            inline: false
          },
          {
            name: "Iron Chunk <:iron1:814675545441697802>",
            value: IronChunk,
            inline: false
          },
          {
            name: "Crystal <:crystal:814675697787600917>",
            value: Crystal,
            inline: false
          }
        );
      msg.channel.send(embed);
    }

    function balance(message) {
      var username = message.author.username;
      var displayAvatarURL = message.author.displayAvatarURL();
      var userId = message.author.id;

      db.query(
        "SELECT * FROM Inventory where userid = " + userId,
        (err, rows) => {
          if (err) throw err;

          let sql;
          if (rows.length < 1) {
            const embed = new Discord.MessageEmbed()
              .setAuthor("Creating inventory space. Please Try Again!")
              .setColor("#E8C215");
            message.channel.send(embed);

            let sql =
              "INSERT INTO Inventory (UserId, ServerId) VALUES ('" +
              message.author.id +
              "','" +
              message.guild.id +
              "')";
            db.query(sql, console.log);
          } else {
            embedBalance(message, rows, true, username, displayAvatarURL);
          }
        }
      );
    }
    balance(message);
  }
};
