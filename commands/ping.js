const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let embed = new Discord.RichEmbed()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .setColor("#42f448")
  .setField(`:signal_strength: Bot Ping : \`${Math.round(bot.ping)}ms\``, true)
   message.channel.send({embed});

}
module.exports.help = {
  name: "ping"
}
