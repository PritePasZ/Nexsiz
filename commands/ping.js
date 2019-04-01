const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let pingembed = new Discord.RichEmbed()
    .setColor("#f4ee42")
    .setDescription(`:signal_strength: Bot Ping`, `${Math.round(bot.ping)}`ms)
    .setDescription(`:computer: API Latency`, `${client.ping}`ms)
    .setFooter("Pong!")
    .setTimeStamp();
    message.channel.send(pingembed)

}
module.exports.help = {
  name: "ping"
}
