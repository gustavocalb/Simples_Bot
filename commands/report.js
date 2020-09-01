const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    const envieii = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setDescription(` ${message.author}, Acabei de enviar uma mensagem na seu privado!`)
    .setFooter(message.guild.name, message.guild.iconURL())
    .setColor('#e34040')
    .setTimestamp()
    message.channel.send(envieii).then(msg => msg.delete({timeout: 5000}))
    await message.author.createDM()
    message.delete()

    const nome = new Discord.MessageEmbed()
    .setTitle(`Sistema de Denuncia do ${message.guild.name}`)
    .setColor('#e34040')
    .setThumbnail(message.guild.iconURL())
    .setDescription("** <a:Setared:729023805803986986> Quem voce deseja Denunciar?**")
    .setFooter(message.guild.name, message.guild.iconURL()) 
    message.author.send(nome).then(msg => msg.delete({timeout: 60000}))

    const denuncia = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, { time: 60000, max: 1 })
    denuncia.on('collect', r => {
    let nome = r.content;
    const denunciaa = new Discord.MessageEmbed()
    .setAuthor(`Sistema de Denuncia do ${message.guild.name}`)
    .setColor('#e34040')
    .setThumbnail(message.guild.iconURL())
    .setDescription("** <a:Setared:729023805803986986> Qual o Motivo da Denuncia?**")
    .setFooter(message.guild.name, message.guild.iconURL()) 
    .setTimestamp()
    message.author.send(denunciaa)

    const print = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, { time: 60000, max: 1 })
    print.on('collect', r => {
    let denuncia = r.content;
    const prints = new Discord.MessageEmbed()
    .setAuthor(`Sistema de Denuncia do ${message.guild.name}`)
    .setColor('#e34040')
    .setThumbnail(message.guild.iconURL())
    .setDescription("** <a:Setared:729023805803986986> Voce tem prints em formado de `LINK` que justifique sua Denuncia?** \n **> Caso tenha mais de uma print envie todas em uma so mensagem! **\n \n ** > Caso nao tenha print(s) basta digitar 'Nao possuo' **")
    .setFooter(message.guild.name, message.guild.iconURL()) 
    .setTimestamp()
    message.author.send(prints)

    const confirmacao = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, { time: 60000, max: 1 })
    confirmacao.on('collect', r => {
    let print = r.content;
    const printss = new Discord.MessageEmbed()
    .setAuthor(`Sistema de Denuncia do ${message.guild.name}`)
    .setColor('#e34040')
    .setThumbnail(message.guild.iconURL())
    .setDescription("**Para enviar sua Denuncia digite ** `Confirmar`, **para cancelar digite `Cancelar`**.")
    .setFooter(message.guild.name, message.guild.iconURL()) 
    .setTimestamp()
    message.author.send(printss)

    const confirm = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, { time: 10000 * 50, max: 1});
    confirm.on('collect', r => {
        if (r.content.toLowerCase() == "confirmar") {
        let confirmacao = r.content;
          const con = new Discord.MessageEmbed()
          .setTitle(`Sistema de Denuncia do ${message.guild.name}`)
          .setThumbnail( message.guild.iconURL())
          .setDescription(`**Sua Denuncia foi Enviada com sucesso <a:yes:728993865054552097>**`)
          .setFooter(message.guild.name, message.guild.iconURL())
          .setColor('#1adb1a')
  
            message.author.send(con)
            let servericon = message.author.displayAvatarURL;
            const form = new Discord.MessageEmbed()
              .setTitle(`<a:warn:728994566153306152> Uma nova Denuncia foi Registrada <a:warn:728994566153306152>`)
              .setThumbnail( message.guild.iconURL())
              .addField(`Nome do Denunciado`, `> <a:Setared:729023805803986986> ${nome}`)
              .addField(`Motivo da Denuncia`, `> <a:Setared:729023805803986986> ${denuncia}`)
              .addField(`Print(s)`, `> <a:Setared:729023805803986986> ${print}`)
              .setFooter(`Denuncia enviada por ${message.author.tag}`, message.author.displayAvatarURL())
              .setTimestamp()
              .setColor('#e34040')
            const canal = client.channels.cache.get("727277223001718873")
            canal.send(form)
        }
            if (r.content.toLowerCase() == "cancelar") {
            const cancelado= new Discord.MessageEmbed()
          .setThumbnail(message.guild.iconURL())
          .setTitle(`Denuncia Cancelada`)
          .setThumbnail( message.guild.iconURL())
          .setDescription(`${message.author}, **Sua Denuncia foi Cancelada com Sucesso <a:yes:728993865054552097>**`)
          .setColor('#e34040')
          .setFooter(message.guild.name, message.guild.iconURL())
          message.author.send(cancelado);             
            }
    
})
    })
})
})
}