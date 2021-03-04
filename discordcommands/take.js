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
  name: 'take',
  description: `take from someone i think`,
  execute(message, args) {
    function take(message) {
  let guildPrefix = prefix.getPrefix(message.guild.id);
  var userId = message.mentions.users.first().id;
  var username = message.author.username;
  var displayAvatarURL = message.author.displayAvatarURL();
  var command = message.content.replace(`${guildPrefix}take `, "");
  var split = command.split(" ");
  db.query("SELECT * FROM Economy where userid = " + userId, (err, rows) => {
    if (err) throw err;

    let sql;
    if (rows.length < 1) {
      const embed = new Discord.MessageEmbed()
        .setAuthor("No Currency yet! try using the work function")
        .setColor("#E8C215");
      message.channel.send(embed);
    } else {
      var bank = rows[0].bank - parseFloat(split[1]);
      sql =
        "UPDATE Economy SET" +
        " bank=" +
        bank +
        " WHERE userid='" +
        userId +
        "'";
    }
    db.query(sql, console.log);
    message.channel.send("Update Success");
  });
} take(message)

  }
}