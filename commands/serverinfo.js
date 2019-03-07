const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let serverembed = new Discord.RichEmbed()
  .setTitle("Server Information")
  .setColor("0ED4DA")
  .setThumbnail(message.guild.iconURL)
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .addField(':white_check_mark: Server Name', message.guild.name, true)
  .addField('Server Owner', message.guild.owner.user.tag, true)
  .addField(":information_source: Server ID", message.guild.id, true)
  .addField(":earth_asia: Server Region", message.guild.region, true)
  .addField(":bar_chart: Total Member", message.guild.memberCount, true)
  .addField(":bust_in_silhouette: Member Count", message.guild.memberCount, true)
  .addField(":robot: Bot Count", message.guild.members.filter(m => m.user.bot).size, true)
  .addField(":clipboard: Joined Date", message.guild.joinedAt, true)
  .setFoote`("📅 Server Created • ${day}.${month}.${year}`);

  message.channel.send(serverembed);
}


module.exports.help = {
  name: "serverinfo",
  description: "Gathers information about the server."
}
