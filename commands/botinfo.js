const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let bname = bot.user.username;
    let botembed = new Discord.RichEmbed()
    .setColor(`#f4d442`)
    .setThumbnail(bicon)
    .setAuthor(bname, bicon)
    .setURL(`https://discord.gg/NeAvnzq`)
    .setTimestamp()
    .setTitle(`Click here to join our discord server`)
    .setDescription("<:nodejs:553086690105753610> Made with Node.js and Discord.js")
    .addField(`:clipboard: Created by`, `PritePasZ#3071`, true)
    .addField(`:information_source: Version`, `0.0.9`, true)
    .addField(`:tools: Debug`, `Currency version of bot is 0.0.9`);

    message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
