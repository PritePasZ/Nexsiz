const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("<:tickNo:576414524014329857> Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:tickNo:576414524014329857> You can't kick the person who has administrator permission!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("<:tickNo:576414524014329857> That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription(":pencil Kick Log :pencil:")
    .setColor("#e56b00")
    .addField(":speaking_head: Kicked User :speaking_head:", `${kUser} with ID ${kUser.id}`)
    .addField(":mag: Kicked By :mag:", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField(":stopwatch: Time :stopwatch:", message.createdAt)
    .addField(":inbox_tray: Reason :inbox_tray:", kReason);

    message.channel.send(kickEmbed)
}

module.exports.help = {
  name:"kick"
}
