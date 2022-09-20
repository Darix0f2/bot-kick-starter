const { Client, GatewayIntentBits } = require('discord.js');
const { startController } = require('./manager/controller.js')
const client = new Client({ intents: [
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.MessageContent
]})

startController(client)

client.login(process.env['token'])