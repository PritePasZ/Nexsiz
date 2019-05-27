const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let supportembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setThumbnail(bicon)
    .setTitle(":information_source: **Support Info**")
    .addField(":robot: **See all of the commands, Use :**", "n!help")
    .addField("<:plus:557903316496154645> **Want to invite Nexsiz?, Use :**", "n!invite")
    .addField(":inbox_tray: **Found some bug?, Use :**", "n!contact")
    .setFooter("Support Server - (https://discord.gg/mjypjna)")
    .setTimestamp()

    message.channel.send(supportembed);

}

module.exports.help = {
    name: "support"
}
