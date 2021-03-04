const prefix = require("discord-prefix");
module.exports = {
  name: 'sprefix',
  description: '',
  execute(message, args){

  let guildPrefix = prefix.getPrefix(message.guild.id);
  prefix.setPrefix(args[0], message.guild.id);
  message.channel.send(`Successfully set prefix to \`${args[0]}\``);

  }
}