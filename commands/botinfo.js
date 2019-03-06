const Discord = require("discord.js");
const bot = new Discord.Client

module.exports.run = async (bot, message, args) => {

    let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#f4bf42")
    .setThumbnail(boticon)
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .addField("Bot Name", bot.user.username, true)
    .addField("Bot Create Date", bot.user.createdAt, true)

    message.channel.send(botembed)
}

module.exports.help = {
    name: "botinfo",
    description: "Shows the bot's info."
}
