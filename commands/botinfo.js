const Discord = require("discord.js");
const bot = new Discord.Client

module.exports.run = async (bot, message, args) => {

    let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#f4bf42")
    .setThumbnail(boticon)
    .addField("Bot Name", bot.user.username)
    .addField("Bot Create Date", bot.user.createdAt)

    message.channel.send(botembed)
}

module.exports.help = {
    name: "botinfo",
    description: "Shows the bot's info."
}
