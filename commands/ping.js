const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor("#42f448")
  .setDescription(`:signal_strength: Bot Ping : \`${Math.round(bot.ping)}ms\``)
   message.channel.send({embed});

}
module.exports.help = {
  name: "ping"
}
