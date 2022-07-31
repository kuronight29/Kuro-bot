const { Client } = require('discord.js');
require('dotenv').config();
const client = new Client({intents: 32767 });


require("./Handlers/Event")(client);

client.login(process.env.TOKEN);
