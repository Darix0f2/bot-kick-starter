const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'hola',
  async execute(message, args, client, user) {
    message.reply("hola!")
  }
}