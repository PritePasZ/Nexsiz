const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let rUser = message.guild.member(message.mention.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return mesage.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);
  
  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#15f153")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

  let reportschannel = message.guild.channel.find(`name`, "reports");
  if(!reportschannel) return message.channel.send("Couldn't find report channel.")

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
