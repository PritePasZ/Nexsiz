const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

message.channel.send(`:ping_pong: Pong! \`${bot.pings[0]}ms\``);
    
}
module.exports.help = {
  name: "ping"
}
