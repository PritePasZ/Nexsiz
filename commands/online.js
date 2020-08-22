const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '346579836292300800') return message.reply(":x: **เฉพาะ PriteToKung สามารถใช้ได้**")

    let bicon = bot.user.displayAvatarURL;
    let bname = bot.user.username;

    let onlineembed = new Discord.RichEmbed()
    .setColor(`#10ff07`)
    .setThumbnail(bicon)
    .setAuthor(bname, bicon)
    .setDescription("<a:plexiOnline:478870259944783873> สถานะบอทบางยัท | Bangyat : ออนไลน์")
    .setFooter(`ผู้สร้าง PriteToKung#3071`)
    .setTimestamp();

    message.channel.send(onlineembed)

}

module.exports.help = {
    name: "online"
}