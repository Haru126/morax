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
  name: 'bg-rank',
  description: 'set your rank bg',
  execute(message){

  let guildPrefix = prefix.getPrefix(message.guild.id);
  const args = message.content.slice(prefix.length).split(/ +/);
  var link = message.content.replace(`${guildPrefix}bg-rank `, "");
  console.log(link);
  db.query(
    "SELECT * FROM ranking where userid = " +
      message.author.id +
      " and globalId =" +
      message.guild.id,
    (err, rows) => {
      if (err) throw err;
      let sql;
      if (rows.length < 1) {
      } else {
        sql =
          "UPDATE ranking SET backgroundLink='" +
          link +
          "' WHERE userid='" +
          message.author.id +
          "'";
      }
      const bgembed = new Discord.MessageEmbed()
  
       .setTitle('Successfully set your rank background image to')
      .setImage(args[1])
      .setColor('#E8C215')
      .setFooter(`Do ${guildPrefix}rank to check it out!  `)
            message.channel.send(bgembed)
      db.query(sql, console.log);

    }
  );


  }
}