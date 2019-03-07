const Discord = require("discord.js");
const bot = new Discord.Client

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let bname = bot.user.username;
    let botembed = new Discord.RichEmbed()
    .setColor("#f4d742")
    .setThumbnail(bicon)
    .setAuthor(bname, bicon)
    .setURL(`https://discord.gg/P96Pr33`)
    .setTimestamp()
    .setTitle(`Click here to join PritePasZ discord server`)
    .setDescription("<:nodejs:553086690105753610> Made with Node.js and Discord.js")
    .addField(`:clipboard: Created by`, `PritePasZ`, true)
    .addField(`:information_source: Version`, `0.0.9`, true)
    .addField(`:tools: Debug`, `Currency version now is 0.0.9`);

    message.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo"
    description: "Shows the Information of bot"
}
