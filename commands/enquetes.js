const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    const semperm = new Discord.MessageEmbed()
    .setTitle("⚠️ **PERMISSÃO NEGADA** ⚠️")
    .setColor('#25d9cd')
    .setDescription("**Voce não tem permissão para esse comando!**")
    .setFooter(message.guild.name, message.guild.iconURL())
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.send()
    }
    let enquetes = args.join(" ")
    if(!enquetes){
        return message.reply("Voce precisar escrever alguma coisa para fazer uma enquete")
    }
    const canal = message.guild.channels.cache.get('727277223001718874')
    const enquetess = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setTitle("<a:nao:728994189676642374> Enquete <a:sim:729482545057497109>")
    .setDescription("**" + enquetes + "**")
    .setTimestamp()
    .setFooter(`Enquete de ${message.author.tag}`)
    canal.send(enquetess).then(msg => {
        msg.react('729482545057497109')
        msg.react('728994189676642374')
    }) 
    message.delete()
}