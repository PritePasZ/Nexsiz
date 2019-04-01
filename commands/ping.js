const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send(`:signal_strength: Bot Ping : \`${Math.round(bot.ping)}ms\`\n:computer API Latency : \`${Math.round(bot.ping)}ms\`);

}
module.exports.help = {
  name: "ping"
}
