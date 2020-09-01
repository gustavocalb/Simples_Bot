const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não possui permissão para isso")
let msgdeletar = args.slice(0).join(" ")
if (msgdeletar < 2 || msgdeletar > 100) message.channel.send("Você só pode deletar de 2 a 100 mensagens");
if (args.length === 0) return message.channel.send("Você não colocou o numeros de mensagens.");


try {
    message.channel.bulkDelete(msgdeletar)
    const mensagensdeletadas = new Discord.MessageEmbed()
    .setTitle("<:lixo:729469845841641552> Mensagens Apagadas <:lixo:729469845841641552>")
    .setDescription(`**${msgdeletar} mensagens foram Deletadas com Sucesso <a:verificadoo:729022865126588558>**`)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(mensagensdeletadas).then(msg => msg.delete({timeout: 7000}))
} catch(e) {
    console.log(e)
}
}
