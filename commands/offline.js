const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '346579836292300800') return message.reply(":x: **เฉพาะ PriteToKung สามารถใช้ได้**")

    let bicon = bot.user.displayAvatarURL;
    let bname = bot.user.username;

    let offlineembed = new Discord.RichEmbed()
    .setColor(`#3e453d`)
    .setThumbnail(bicon)
    .setAuthor(bname, bicon)
    .setDescription("<a:plexiOffline:478870457848823818> สถานะบอทบางยัท | Bangyat : ออฟไลน์ปิดปรับปรุงหรือ Dyno Hours หยุดทำงาน")
    .setFooter(`ผู้สร้าง PriteToKung#3071`)
    .setTimestamp();

    message.channel.send(offlineembed)

}

module.exports.help = {
    name: "online"
}