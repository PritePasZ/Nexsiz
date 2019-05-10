const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send("<a:loading:573815730504597505> Generating icon...");

if(!message.guild.iconURL) return msg.edit("<:tickNo:315009174163685377> **The server not have an icon!**");

let iconembed = new Discord.RichEmbed()
.setColor("f4d442")
.setFooter("Searched by " + message.author.tag)
.setImage(message.guild.iconURL)
.setTitle(":information_source: Icon")
.setDescription("[Icon URL link]("+message.guild.iconURL+")")

message.channel.send(iconembed)


 }

    module.exports.help = {
        name: "icon"
    }
