const Discord = require("discord.js");
let config = require("../botconfig.json)";

 module.exports.run = async (bot, message, args) => {

     function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
    }

     let embedtime = new Discord.RichEmbed()
       .setAuthor(message.author.displayName, message.author.displayAvatarURL
       .setColor(config.green)
       .setDescriprion(`**I have been online for :** ${duration(bot.uptime)}`)
       .setTimeStamp();

     message.channel.send(embedtime)
 }


 module.exports.help = {
    name: "uptime"

}
