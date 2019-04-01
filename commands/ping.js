const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let embed = new Discord.RichEmbed()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .setColor("#42f448")
  .setDescription(`:signal_strength: Bot Ping \n\`${Math.round(bot.ping)}ms\``)
  .setFooter("🏓 Pong!")
   message.channel.send({embed});

}
module.exports.help = {
  name: "ping"
}
