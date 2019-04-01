const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send(`:computer: API Latency \`${Math.round(bot.ping)}ms\``);

}
module.exports.help = {
  name: "ping"
}
