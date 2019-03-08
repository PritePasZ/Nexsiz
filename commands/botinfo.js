const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let bname = bot.user.username;
    let botembed = new Discord.RichEmbed()
    .setColor(`#f4d442`)
    .setThumbnail(bicon)
    .setAuthor(bname, bicon)
    .setURL(`https://discord.gg/P96Pr33`)
    .setTimestamp()
    .setTitle(`Click here to join PritePasZ discord server`)
    .setDescription("<:nodejs:553212483415048221> Made with Node.js and Discord.js")
    .addField(`:clipboard: Created by`, `PritePasZ#3071`, true)
    .addField(`:information_source: Version`, `0.1.1b`, true)
    .addField(`:tools: Debug`, `Updated to version 0.1.1b, new commands --say and --clear (Moderator Commands)`)
    .addField(`:robot: Bot Created Date`, bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
