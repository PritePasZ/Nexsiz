const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("<:tickNo:576414524014329857> Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:tickNo:576414524014329857> You can't banned the person who has administrator permission!");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("<:tickNo:576414524014329857> That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription(":pencil: Ban Log :pencil:")
    .setColor("#bc0000")
    .addField(":speaking_head: Banned User:speaking_head:", `${bUser} with ID ${bUser.id}`)
    .addField(":mag: Banned By :mag:", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField(":stopwatch: Time :stopwatch:", message.createdAt)
    .addField(":inbox_tray: Reason :inbox_tray:", bReason);

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
