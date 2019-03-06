const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let serverembed = new Discord.RichEmbed()
  .setAuthor(message.author.Server, message.author.displayAvatarURL)
  .setTitle("Server Information")
  .setColor("0ED4DA")
  .setThumbnail(message.guild.iconURL)
  .addField('Name', `${message.guild.name} (${message.guild.nameAcronym})`, true)
  .addField('Server Owner', message.guild.owner.user.tag, true)
  .addField(":calendar: Server Create Date", message.guild.createdAt, true)
  .addField("Member Count", message.guild.memberCount, true)

  return message.channel.send(serverembed);
}


module.exports.help = {
  name: "serverinfo",
  description: "Gathers information about the server."
}
