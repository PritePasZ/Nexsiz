const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<:tickNo:576414524014329857> **You dont have Manage Messages Permisson!**");
    if(!rUser) return message.channel.send("<:tickNo:576414524014329857> **Couldn't find user.**");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription(":pushpin: การรายงาน")
    .setColor("#15f153")
    .addField(":inbox_tray: รายงานผู้ใช้", `${rUser} with ID: ${rUser.id}`)
    .addField(":incoming_envelope:  รายงานโดย", `${message.author} ID: ${message.author.id}`)
    .addField(":clipboard: ห้อง", message.channel)
    .addField(":pencil: เหตุผล", rreason);

    message.channel.send(reportEmbed)

    message.delete();

}

module.exports.help = {
  name: "report"
}
