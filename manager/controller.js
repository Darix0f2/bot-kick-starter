var AsciiTable = require('ascii-table')

const { events } = require(`${__dirname}/handlers/events.js`)
const { textCommands } = require(`${__dirname}/handlers/textcommands.js`)

module.exports.startController = async function (client){
  var table = new AsciiTable('Registro de Handler')
  .setHeading('Tipo', 'Cantidad')
  .addRow('Eventos', await events(client))
  .addRow('Comandos', await textCommands(client))
  console.clear()
  console.log(table.toString())
}