const fs = require('fs')

const projectName = "Cubi"
const isreplit = false
const path = (isreplit == true) ? "/home/runner/"+projectName+"/events" : "C:/Users/System32/Desktop/bots/yt/events"
let count = 0

module.exports.events = function (client){
  const eventFiles = fs.readdirSync(path).filter((file) => file.endsWith(".js"));
    for (const file of eventFiles) {
      const event = require(path+`/${file}`);
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
      } else {
        client.on(event.name, (...args) => event.execute(...args, client));
      }
      count++
    }
  return count
}