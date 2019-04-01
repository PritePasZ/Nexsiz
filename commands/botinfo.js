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
    .setDescription("Made with <:nodejs:553212483415048221> Node.js and <:discordjs:553213251488317440> Discord.js\nHosted bot for free by <:heroku:553414334156374016> Heroku")
    .addField(`:clipboard: Created by`, `PritePasZ#3071`, true)
    .addField(`:information_source: Version`, `0.1.3b`, true)
    .addField(`:tools: Debug`, `Updated to version 0.1.2b, new commands --say and --clear (Moderator Commands)`)
    .addField(`:robot: Bot Created Date`, bot.user.createdAt)
    .setFooter("Made by PritePasZ","https://cdn.discordapp.com/avatars/346579836292300800/b02ca29aee1ec133c84377bd4235e957.png")
    .setTimestamp();

    message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
