const fs = require('fs')
const { Collection } = require('discord.js')
const projectName = "Cubi"
const isreplit = false
const path = (isreplit == true) ? "/home/runner/"+projectName+"/commands/text" : "C:/Users/System32/Desktop/bots/yt/commands/text"
let count = 0

module.exports.textCommands = async function (client) {
    client.CmdText = new Collection();
    const commandFolder = fs.readdirSync(path);
    for (const folder of commandFolder) {
      const commandFile = fs.readdirSync(path+`/${folder}`);
      for (const file of commandFile) {
        const command = await require(path+`/${folder}/${file}`);
        client.CmdText.set(command.name, command);
        count++
      }
    }
  return count
  };