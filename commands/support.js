const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let supportembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setThumbnail(bicon)
    .setTitle(":information_source: **Support Info**")
    .addField(":robot: **See all of the commands, Use :**", "b!help")
    .addField("<:plus:557903316496154645> **ชวนบอท Bangyat?, ใช้ :**", "b!invite")
    .addField(":inbox_tray: **ติดต่อสอบถาม?, Use :**", "b!contact")
    .setFooter("เซิฟเวอร์ - (https://discord.gg/mjypjna)")
    .setTimestamp()

    message.channel.send(supportembed);

}

module.exports.help = {
    name: "support"
}
