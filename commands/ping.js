const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send(`:computer: API Latency \`${Math.round(client.ping)}ms\``);

}
module.exports.help = {
  name: "ping"
}
