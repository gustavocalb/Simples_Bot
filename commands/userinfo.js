const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author
    const moment = require('moment');
    moment.locale('pt-BR')
    function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString()
    const min = Math.floor((ms / (1000 * 60)) % 60).toString()
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
    return `${days.padStart(1, '0')} dias, ${hrs.padStart(2, '0')} horas, ${min.padStart(2, '0')} min, ${sec.padStart(2, '0')} sec`  
}
if(user.presence.status == "dnd") {
    user.presence.status = "<:dnd:729073934498136124> Não pertube"
} else if(user.presence.status === "idle") {
    user.presence.status = "<:idle:729074109950197881> Ausente"
} else if(user.presence.status = "ofline") {
    user.presence.status = "<:offline:729074488532140084> Ofline"
} else if(user.presence.status === "online") {
    user.presence.status = "<:online:729074004757053591> Online"
}
const userinfo = new Discord.MessageEmbed()
.setTitle(`*Informações do Usuario*`)
.addField("**<:identidade:729020479654068324> Nome:**", `**${user.username}**`, true)
.addField("**🖥️ ID:**", `**${user.id}**`, true)
.addField("**📌 Tag:**", `**${user.tag}**`, true)
.addField("**📆 Conta criada em**",`**${moment(user.createdAt).format('DD/MM/YYYY')}**`, true)
.addField(`**⏰ Status:**`, `**${user.presence.status}**`, true)
.setThumbnail(user.displayAvatarURL())
.setColor('#e83351')
.setFooter(message.guild.name, message.guild.iconURL())
message.channel.send(userinfo)
}
