const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("<:tickNo:576414524014329857> ไม่เจอผู้้ใช้");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:tickNo:576414524014329857> ไม่สามารถแบนได้ไม่มี Administrator Role");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("<:tickNo:576414524014329857> ผู้ใช้นี้ไม่สามารถแบนได้");

    let banEmbed = new Discord.RichEmbed()
    .setDescription(":pencil: การแบน :pencil:")
    .setColor("#bc0000")
    .addField(":speaking_head: แบนผู้ใช้ :speaking_head:", `${bUser} with ID ${bUser.id}`)
    .addField(":mag: ถูกแบนโดย :mag:", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField(":stopwatch: เวลา :stopwatch:", message.createdAt)
    .addField(":inbox_tray: เหตุผล :inbox_tray:", bReason);

    message.channel.send(banEmbed);
    
}

module.exports.help = {
  name:"ban"
}
