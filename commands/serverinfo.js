const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let serverembed = new Discord.RichEmbed()
  .setTitle("Server Information")
  .setColor("0ED4DA")
  .setThumbnail(message.guild.iconURL)
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .addField('Server Name', message.guild.name, true)
  .addField('Server Owner', message.guild.owner.user.tag, true)
  .addField("Server ID", message.guild.id, true)
  .addField("Server Region", message.guild.region, true)
  .addField("Total Member", message.guild.memberCount, true)
  .addField("Member Count", message.guild.memberCount, true)
  .addField("Server Create Date", message.guild.createdAt, true)
  .setFooter(`📅 Server Created - ${day}.${month}.${year}`);

  return message.channel.send(serverembed);
}


module.exports.help = {
  name: "serverinfo",
  description: "Gathers information about the server."
}
