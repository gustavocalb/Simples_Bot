const moment = require("moment");
require("moment-duration-format");

module.exports = async client => {
  console.log(`${client.user.tag} fez login!`)
async function status() {

    let membros = client.guilds.cache.map((g) => g.memberCount).reduce((p, c) => p + c);

    const uptime = moment.duration(client.uptime).format(`y[a] M[m] w[s] d[d] h[h] m[m] s[s]`)

    const status = [
      {
        type: 'WATCHING',
        message: `🖥️ ${membros} membros`
      },
      {
        type: 'PLAYING',
        message: `🎮 Rede Hystoric`
      },
    ];

    const random = status[Math.floor(Math.random() * status.length)];
    client.user.setActivity(random.message, {
      type: random.type,
      url: random.url,
    });

  }
  setInterval(status, 15000)
}