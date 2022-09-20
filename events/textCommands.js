const prefix = ">"

module.exports = {
  name: 'messageCreate',
  async execute(message, client){
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const input = args.shift().toLowerCase()
    if(client.CmdText.has(input)){
      client.CmdText.get(input).execute(message, args, client, message.author)
    }
  }
}