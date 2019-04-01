const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let embed = new Discord.RichEmbed()
  .setAuthor(bname, bicon)
  .setColor("#42f448")
  .setDescription(`:signal_strength: Bot Ping \n${Math.round(bot.ping)}ms`)
  .setFooter("Made by PritePasZ#3071","https://cdn.discordapp.com/avatars/346579836292300800/b02ca29aee1ec133c84377bd4235e957.png")
   message.channel.send({embed});

}
module.exports.help = {
  name: "ping"
}
