const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    const envieii = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setDescription(` ${message.author}, Acabei de enviar uma mensagem na seu privado!`)
    .setFooter(message.guild.name, message.guild.iconURL())
    .setColor('#dba81a')
    .setTimestamp()
    message.channel.send(envieii).then(msg => msg.delete({timeout: 5000}))
    await message.author.createDM()
    message.delete()

    const nome = new Discord.MessageEmbed()
    .setTitle(`Sistema de Sugestão do ${message.guild.name}`)
    .setColor('#dba81a')
    .setThumbnail(message.guild.iconURL())
    .setDescription("**Qual o seu nick?**")
    .setFooter(message.guild.name, message.guild.iconURL()) 
    message.author.send(nome).then(msg => msg.delete({timeout: 60000}))

    const sugestao = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, { time: 60000, max: 1 })
    sugestao.on('collect', r => {
    let nome = r.content;
    const sugestaoo = new Discord.MessageEmbed()
    .setAuthor(`Sistema de Sugestão do ${message.guild.name}`)
    .setColor('#dba81a')
    .setThumbnail(message.guild.iconURL())
    .setDescription("**Qual susgestão deseja dar para a Melhoria do Servidor?**")
    .setFooter(message.guild.name, message.guild.iconURL()) 
    .setTimestamp()
    message.author.send(sugestaoo)

    const confirmacao = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, { time: 60000, max: 1 })
    confirmacao.on('collect', r => {
    let sugestao = r.content;
    const confirmacaoo = new Discord.MessageEmbed()
    .setAuthor(`Sistema de Sugestão do ${message.guild.name}`)
    .setColor('#dba81a')
    .setThumbnail(message.guild.iconURL())
    .setDescription("**Para enviar sua Sugestão digite ** `Confirmar`, **para cancelar digite `Cancelar`**.")
    .setFooter(message.guild.name, message.guild.iconURL()) 
    .setTimestamp()
    message.author.send(confirmacaoo)

    const confirm = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, { time: 10000 * 50, max: 1});
    confirm.on('collect', r => {
        if (r.content.toLowerCase() == "confirmar") {
          const con = new Discord.MessageEmbed()
          .setTitle(`Sistema de Sugestão do ${message.guild.name}`)
          .setThumbnail( message.guild.iconURL())
          .setDescription(`**Sua Sugestão foi Enviada com sucesso <a:yes:728993865054552097>**`)
          .setFooter(message.guild.name, message.guild.iconURL())
          .setColor('#1adb1a')
  
            message.author.send(con)
            let servericon = message.author.displayAvatarURL;
            const form = new Discord.MessageEmbed()
              .setTitle(`Nova Sugestão Registrada`)
              .setThumbnail( message.guild.iconURL())
              .addField(`Nick`, `> ${nome}`)
              .addField(`Sugestão`, `> ${sugestao}`)
              .setFooter(`Enviado por ${message.author.tag}`, message.author.displayAvatarURL())
              .setTimestamp()
              .setColor('#dba81a')
            const canal = client.channels.cache.get("727277223001718873")
            canal.send(form).then(msg => {
                msg.react('728996658590777355')
                msg.react('728994297697009775')
            })
        }
            if (r.content.toLowerCase() == "cancelar") {
            const cancelado= new Discord.MessageEmbed()
          .setThumbnail(message.guild.iconURL())
          .setTitle(`Sugestão Cancelada`)
          .setThumbnail( message.guild.iconURL())
          .setDescription(`${message.author}, **Sua Sugestão foi Cancelada com Sucesso <a:yes:728993865054552097>**`)
          .setColor('#e34040')
          .setFooter(message.guild.name, message.guild.iconURL())
          message.author.send(cancelado);             
            }
    
})
    })
})
}