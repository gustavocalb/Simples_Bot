const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

    const semperm = new Discord.MessageEmbed()
    .setTitle("⚠️ **PERMISSÃO NEGADA!** ⚠️")
    .setColor('#e80707')
    .setDescription("**Voce não tem permissão para esse comando!**")
    .setFooter(message.guild.name, message.guild.iconURL())

    if(!message.member.hasPermission("BAN_MEMBERS")){
        return message.channel.send(semperm)
    }
    
    const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!membro) return message.reply("Voce nao mecionou ninguem!")

    if(membro === message.member) return message.reply("Voce nao pode se Banir!")

    const motivo = args.slice(1).join(" ")
    if(!motivo) return message.reply("Voce precisa por algum motivo!")

    const embed = new Discord.MessageEmbed()
    .setTitle("CONFIRMAÇAO DO BANIMENTO ")
    .setAuthor(message.guild.name)
    .setDescription(`**Voce realmente deseja banir ${membro}?** \n \n **Se SIM reaja <:sim1:728996658590777355>** \n   \n **Se NAO reaja** <:errado:728994297697009775> `)
    .setColor('#e80707')
    .setFooter(message.guild.name, message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
    message.channel.send(embed).then(msg => {          
        msg.react("728996658590777355")
        msg.react("728994297697009775")
        msg.delete({timeout: 20000})  

        let filtro = (reaction, usuario) => reaction.emoji.id === "728996658590777355" && usuario.id === message.author.id;
        const coletor = msg.createReactionCollector(filtro, {max: 1});

        const cancela = (reaction, usuario) => reaction.emoji.id === "728994297697009775" && usuario.id === message.author.id;
        const cancelar = msg.createReactionCollector(cancela)

        const cancelado = new Discord.MessageEmbed()
        .setTitle("BANIMENTO CANCELADO")
        .setDescription(`**${message.author}, O Banimento foi Cancelado com Sucesso! <a:verificadoo:729022865126588558>**`)
        .setFooter(message.guild.name, message.guild.iconURL())
        .setColor('#e80707')

        cancelar.on('collect', r2 => {
            msg.delete()
            message.channel.send(cancelado).then(msg => msg.delete({timeout: 15000}))
        })
        coletor.on("collect", em => {
            
            const canal = message.guild.channels.cache.get('727277223001718866')
     

            const sla = new Discord.MessageEmbed()
            .setAuthor(`${message.guild.name}`, message.guild.iconURL())
            .setTitle("<a:nao:728994189676642374> MEMBRO BANIDO <a:nao:728994189676642374>")
            .setDescription(`${membro}, **Acaba de ser Banido por ${message.author}**`)
            .addField("**<a:Setared:729023805803986986> Pelo Motivo:**", "```" + motivo + "```")
            .setFooter(message.guild.name, message.guild.iconURL())
            .setColor('#e80707')
            canal.send(sla)
            message.delete()

            const banidocomsucesso = new Discord.MessageEmbed()
            .setTitle("BANIDO COM SUCESSO")
            .setAuthor(`${message.guild.name}`, message.guild.iconURL())
            .setDescription(`**${membro}, Foi Banido com Sucesso! <a:verificadoo:729022865126588558>**`)
            .setColor('#e80707')
            .setFooter(message.guild.name, message.guild.iconURL())
            message.channel.send(banidocomsucesso).then(msg => msg.delete({timeout: 15000}))
        })
    })
}