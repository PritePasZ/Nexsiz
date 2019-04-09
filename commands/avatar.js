const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let aTaged = message.mentions.first() || message.member;
  let embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setDescription(`<:bustinsilhouette:553086092837126145> Avatar user ${aTaged.user.username}`)
  .setImage(aTaged.user.displayAvatarURL)
  .setFooter("Here is the avatar image")
  message.channel.send({embed});

}

module.exports.help = {
  name: "avatar"
}
