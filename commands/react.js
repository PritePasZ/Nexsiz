const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(message.author.id != "346579836292300800") return;

  let emoji = message.guild.emojis.find('name', "thonk");
  message.react(emoji);
}

module.exports.help = {
  name: "react"
}
