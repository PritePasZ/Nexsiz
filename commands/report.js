const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<:tickNo:315009174163685377> **You dont have Manage Messages Permisson!**");
    if(!rUser) return message.channel.send("<:tickNo:315009174163685377> **Couldn't find user.**");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription(":pushpin: Reports")
    .setColor("#15f153")
    .addField(":inbox_tray: Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField(":incoming_envelope:  Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField(":clipboard: Channel", message.channel)
    .addField(":pencil: Reason", rreason);

    message.channel.send(reportEmbed)

    message.delete();

}

module.exports.help = {
  name: "report"
}
