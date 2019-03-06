const Discord = require("discord.js")
const bot = new Discord.Client
module.exports.run = async (bot, message, args) => {
  let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    setColor("#e51212")
    .setThumbnail(boticon)
    .addField("Bot Name", bot.user.username)
    .addField("Bot Create Date", bot.user.createAt)
    .addField("Servers", bot.guilds.size)

    message.channel.send(botembed)
}

module.exports.help = {
  name: "botinfo",
  description: "Show the bot's info."
}
