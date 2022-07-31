const { Client, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`${client.user.tag} đã sẵn sàng!`);
    client.user.setPresence({ activities: [{ name: 'Bot by Kuro-kun#0965' }], status: 'online' });
});

client.on('MessageCreate', async (message) => {
    if (message.author.bot) return;
    const prefix = 'k!'; 
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'ping') {
        message.reply(`🏓Pong! \`${client.ws.ping}ms\``);
    }
});

client.login(process.env.TOKEN);
