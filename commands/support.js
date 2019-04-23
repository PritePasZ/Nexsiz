const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let supportembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setAuthor(message.author.username, message.author.displayAvatarURL))
    .setThumbnail(bicon)
    .setTitle(":information_source: Support Info")
    .addField(":white_check_mark: **To see the bot commands use**", "!help")
    .addField("<:plus:557903316496154645> **Invite Nexsiz use**", "n!invite")
    .setTimestamp()

    message.channel.send(supportembed)

}

module.exports.help = {
    name: "support"
}
