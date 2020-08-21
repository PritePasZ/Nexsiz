const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("<:tickNo:576414524014329857> Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:tickNo:576414524014329857> ไม่มี Administrator Permission!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("<:tickNo:576414524014329857> ผู้นี้ไม่สามารถเตะได้");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription(":pencil: Kick Log :pencil:")
    .setColor("#e56b00")
    .addField(":speaking_head: การเตะ :speaking_head:", `${kUser} ID ${kUser.id}`)
    .addField(":mag: เดะโดย :mag:", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField(":stopwatch: เวลา :stopwatch:", message.createdAt)
    .addField(":inbox_tray: เหตุผล :inbox_tray:", kReason);

    message.channel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
