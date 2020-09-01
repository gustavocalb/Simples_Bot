const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs');
const path = require('path')
const moment = require('moment');
moment.locale('pt-BR');
const config = require('./config.json')
client.prefix = config.prefix

fs.readdir('./events', (err, files) => {
  if(err) return console.error(err);
  files.forEach(file => {
      if(!file.endsWith(".js")) return;
      let eventName = file.substring(0, file.indexOf(".js"));
      let eventModule = require(path.join(__dirname, 'events', eventName));
      client.on(eventName, eventModule.bind(null, client));
  })
})

client.on('message', async message => {
    if(message.author.bot) return; 
    if(!message.content.startsWith(config.prefix)) return; 
    let cmd = message.content.split(" ")[0]
    cmd = cmd.replace(config.prefix, '') 
    let args = message.content.split(" ").slice(1) 
    try { 
        let arquivoDeComando = require(`./commands/${cmd}.js`)
        await arquivoDeComando.run(client, message, args);
        } catch (err) {
          if(err.code == "MODULE_NOT_FOUND") { //Lendo se o erro que ocorreu é o erro 404
          } else { // Se o erro for != de 404, isso será retornado.
            message.channel.send(`Algo deu errado ao tentar executar esse comando, desculpe. Erro: \`${err.message}\``)
          }
        }
      })      
client.login(config.token)