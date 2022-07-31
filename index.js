const { Client } = require('discord.js');
const client = new Client({intents: 32767 });
const { token } = require("./config.json");

require("./Handlers/Event")(client);

client.login(token);
