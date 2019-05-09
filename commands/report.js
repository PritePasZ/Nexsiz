const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: **You dont have Manage Messages Permisson!**");
    if(!rUser) return message.channel.send(":x: **Couldn't find user.**");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription(":pushpin: Reports")
    .setColor("#15f153")
    .addField(":inbox_tray: Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField(":incoming_envelope:  Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField(":clipboard: Channel", message.channel)
    .addField(":pencil: Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send(":x: **Couldn't find reports channel.**");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}
