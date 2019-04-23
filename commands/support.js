const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let supportembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setTitle("Support Info")
    .addField("To see the bot commands use", "`!help`")
    .addField("Invite Nexsiz use", "`n!invite`")

    message.channel.send(supportembed)

}

module.exports.help = {
    name: "support"
}
