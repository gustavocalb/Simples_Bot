const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    const help = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setTitle("Comandos do Servidor")
    .addField("!Ping", "> A latência entre o Discord e a aplicação", true)
    .addField("!Report", "> Reportar um Membro")
    .addField("!Serverinfo", "> Informações do Servidor", true)
    .addField("!Sugerir", "> Mandar uma Sugestão para o Servidor")
    .addField("!Userinfo", "> Informações do Usuario", true)
    .addField("Caso esses comandos não seja o que procura", "**basta reagir ⏩ abaixo para acessar a proxima página**")
    .setColor('#ff8800')
    .setFooter("Página 1/2")


    const help2 = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setTitle("Comandos do Servidor")
    .addField("!Ban", "> Banir algum membro")
    .addField("!Clear", "> Apagar mensagens")
    .addField("!Anunciar", "> Dar um anuncio")
    .addField("!Enquetes", "> Fazer uma enquete")
    .addField("Caso queria voltar para página anterior", "**Basta reagir no ⏪ abaixo**")
    .setColor('#ff8800')
    .setFooter("Página 2/2")

    const msg = await message.channel.send(help)

   msg.react('⏩')

    let filter = (reaction, usuario) => {
        return ['⏪','⏩'].includes(reaction.emoji.name) && usuario.id === message.author.id;
    }

    const colector = msg.createReactionCollector(filter, {time: 100000});
    
    colector.on("collect", em => {
        switch (em.emoji.name) {
          case "⏩":
            em.remove(message.author.id);
            msg.edit(help2)
            msg.react('⏪')
            break;
          case "⏪": 
            em.remove(message.author.id);
            msg.edit(help);
            msg.react('⏩')

            break;
        }
      });
}