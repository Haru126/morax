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
  name: `give`,
  description: `give someone mora`,
  execute(message, args) {
    function give(message) {
      let guildPrefix = prefix.getPrefix(message.guild.id);
  var userId = message.mentions.users.first().id;
  var username = message.author.tag;
  var displayAvatarURL = message.author.displayAvatarURL();
  var command = message.content.replace(`${guildPrefix}give `, "");
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
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.mentions.users.first().tag, message.mentions.users.first().displayAvatarURL())
    .setFooter(`Sent by ${username}`)
    .setDescription(`Sucessfully sent ${parseFloat(split[1])}<:mora:808492540100608041> to <@${userId}>`)
    .setColor("#E8C215");
    message.channel.send(embed);
  });
} give(message)

  }
}