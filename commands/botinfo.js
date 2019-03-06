const Discord = require("discord.js");
const bot = new Discord.Client

module.exports.run = async (bot, message, args) => {

    let boicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor(message.author.bot.username, message.author.displayAvatarURL)
    .setDescription("Bot Information")
    .setColor("#f4bf42")
    .setThumbnail(boicon)
    .addField("Created By", bot.owner.user.tag)
    .addField("Bot Name", bot.user.username)
    .addField("Bot Create Date", bot.user.createdAt)

    message.channel.send(botembed)
}

module.exports.help = {
  name: "botinfo"
  description: "Shows the information of bot"
}
