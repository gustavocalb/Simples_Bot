const Discord = require('discord.js')
module.exports = (client, member) => {
const canal = member.guild.channels.cache.get('727954087546585160')
const bemvindo = new Discord.MessageEmbed()
.setTitle('Seja Bem-Vindo(a)')
.setDescription(`**<a:arcodireita_s:729100846192656508> ${member} Seja muito Bem-Vindo(a) ao ${member.guild.name} Oficial <a:708651683865034784:728993814190096466> **\n \n** <a:sino:729099745552891996> Leia as regras para evitar possiveis Punições!**`)
.addField('**<:dima:729112112370155552> Está precisando de ajuda?**', "**Crie um ticket, ou chama um dos nossos staff para ajudá-lo.**")
.addField('**<:esme:729114199606689792> IP do Servidor**', "**Em breve...**")
.addField('**<a:agoogletada:729111818630463559> Atualmente nosso Discord possuem**', `**${member.guild.memberCount} Membros!**`)
.setColor('#1872ad')
.setFooter(member.guild.name, member.guild.iconURL())
canal.send(member, bemvindo)
}