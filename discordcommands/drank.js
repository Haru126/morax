const Discord = require("discord.js");
const mysql = require("mysql");  
const db = mysql.createConnection({
  host: "eu02-sql.pebblehost.com",
  user: "customer_166639_morax",
  password: "-2dCmgj@RBVl@Zg9xJW7",
  database: "customer_166639_morax"
});
const canvacord = require("canvacord");
module.exports = {
  name: 'drank',
  description: 'check your rank',
  execute(message, args){
    function rank(message) {
  db.query(
    "SELECT * FROM ranking where userid = " +
      message.author.id +
      " and globalId =" +
      message.guild.id,
    (err, rows) => {
      if (err) throw err;
      if (rows.length < 1) {
      } else {
        var link = rows[0].backgroundLink;
        const card = new canvacord.Rank()
          .setUsername(message.author.username)
          .setDiscriminator(message.author.discriminator, "#FFFFFF")
          .setLevel(rows[0].level)
          .setCurrentXP(rows[0].currentXP)
          .setRequiredXP(rows[0].maxXP)
          .setRank(0, "false", false)
          .setBackground("IMAGE", link)
          .setOverlay("", 0.5, false)
          .setAvatar(
            message.author.displayAvatarURL({ format: "png", size: 1024 })
          );

        card.build().then(buffer => {
          const attachment = new Discord.MessageAttachment(buffer, link);
          message.channel.send(attachment);
        });
      }
    }
  );
} rank(message)
  }
}