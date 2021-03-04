const Discord = require('discord.js')
const ms = require('ms')
const prefix = require("discord-prefix");

module.exports = {
  name:'timer',
  description: 'a timer',
  execute(message, args) {
    
    let guildPrefix = prefix.getPrefix(message.guild.id);
    let Timer = args[0];
            let reason = args.slice(1).join(' ')

            if(!reason){

                reason = `No reason was provided`

            }
            if(!args[0]){
                return message.channel.send(`USAGE: ${guildPrefix}timer + duration + s|m|h + OPTIONAL: reason`)

                
            }            if(args[0] <= 0){

                return message.channel.send(`USAGE: ${guildPrefix}timer + duration + s|m|h + OPTIONAL: reason`)

            } else {

                const timer2embed = new Discord.MessageEmbed()
                .setAuthor(`Timer set`, message.author.displayAvatarURL())
                .setDescription(`Duration: ${args[0]} \nReason: ${reason}`)
                .setColor('#E8c215')
            message.channel.send(timer2embed)

            setTimeout(function(){

                var d = new Date().toLocaleString(); // for now

                const timerembed = new Discord.MessageEmbed()
                .setAuthor('Timer finished', message.author.displayAvatarURL())
                .setDescription(`Timer duration: ${ms(ms(Timer), {long: true})} \nReason: ${reason} \n Set at: \`${d}\``)
                .setColor('#E8c215')

                message.channel.send(timerembed)

            }, ms(Timer));

        }
  }
}