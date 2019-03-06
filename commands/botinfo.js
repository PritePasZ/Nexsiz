const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let serverembed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setTitle("Server Information")
  .setColor("0ED4DA")
  .setThumbnail(message.guild.iconURL)
  .addField(":white_check_mark: Server Name", message.guild.name, true)
  .addField(":owner: Server Owner", message.guild.owner.user.tag, true)
  .addField(":calendar: Server Create Date", message.guild.createdAt, true)
  .addField(":bar_chart: Toal Members", message.guild.memberCount, true)
  .addField("Member Count", message.guild.memberCount, true)
  .addField(":card_index: Server ID", message.guild.id, true)
  .addField(":earth_asia:Server Region",message.guild.region, true)

  return message.channel.send(serverembed);
}


module.exports.help = {
  name: "serverinfo",
  description: "Gathers information about the server."
}
