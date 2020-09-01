exports.run = (client, message, args) => {
    message.channel.send(`:ping_pong: Ping! ${client.ws.ping}ms.`);
  }
  