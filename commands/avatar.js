const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let aTaged = msg.mentions.user.first();
  msg.channel.send(`${aTaged.displayAvatarURL}`);
}

module.exports.help = {
  name: "avatar"
}
