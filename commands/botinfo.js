const Discord = require("discord.js");
const bot = new Discord.Client

module.exports.run = async (bot, message, args) => {

    let boticon = bot.user.displayAvatarURL;
    let bname =  bot.user.username;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#f7e73b")
    .setThumbnails(boticon)
    .setURL("https://discord.gg/P96Pr33")
    .setTimestamp()
    .setTitle("Click here to join PritePasZ discord server")
    .setDescription("<:nodejs:553086690105753610> Made with Node.js and Discord.js")
    .addField("Bot Name", bot.user.username)
    .addField("Bot Created Date", bot.user.createdAt)
    .addField("Server", bot.guild.size)
    .addField(":clipboard: Created By", "PritePasZ#3071", true)
    .addField(":information source: Version", "Dont have any version yet", true)
    .addField(":tools Debug", "creator are programming the bot,bot now dont have a version");
//test typing here 
    message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
  description: "Show the bot's info"
}
