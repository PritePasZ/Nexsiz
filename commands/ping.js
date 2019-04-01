const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let embed = new Discord.RichEmbed()
  .setDescription(`:signal_strength: Bot Ping : \`${Math.round(bot.ping)}ms\``);

}
module.exports.help = {
  name: "ping"
}
