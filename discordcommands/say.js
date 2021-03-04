const Discord = require("discord.js");
module.exports = {
  name: 'say',
  description: "let the bot say it",
  execute(message, args){
    if (message.member.hasPermission('MANAGE_ROLES')){
    let saymessage = args.join(' ')
    message.channel.send(saymessage)
    message.delete()
  }else {
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(`You can't use this command`)
    .setColor("#E8C215");
    message.channel.send(embed)
  }}
}