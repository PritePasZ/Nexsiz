const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let ping = new Discord.RichEmbed()
    .setColor("#f4ee42")
    .setField(`:signal_strength: Bot Ping`, `${Math.round(bot.ping)}`ms, true)
    .setField(`:computer: API Latency`, `${client.ping}`ms, true)
    .setFooter("Pong!")
    .setTimeStamp();

}
module.exports.help = {
  name: "ping"
}
