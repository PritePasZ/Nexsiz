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
    .setDescription("<:nodejs:553086690105753610> Made with Node.js and Discord.js")
    .addField(`:clipboard: Created by`, `PritePasZ#3071`, true)
    .addField(`:information_source: Version`, `${version}`, true)
    .addField(`:tools: Debug`, `New update to version ${version}!, alot of stuff have been changed and improved. :D`)
    .addField(`:robot: Bot Created Date`, bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
