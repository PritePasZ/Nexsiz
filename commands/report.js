const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return.message.channel.send(`Couldnt fine the user ${message.author}`);
  let rreason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#42f448")
  .addField("Report User", `${rUsers.id} into ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel Reported In", message.channel)
  .addField("Time Reported At", message.createdAt)
  .addField("Reason For Report", rreason);

  let reportschannel = message.guild.channel.find(`name`, "📖สมุดแดง📖");
  if(!reportschannel) return message.channel.send(`Hey! ${messsage.author}! I cant seem to find a channel to send the report in!`);


  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
