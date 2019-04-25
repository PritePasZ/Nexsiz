const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let megustafac = new Discord.RichEmbed()
.setColor("#ffffff")
.setImage("https://cdn.discordapp.com/attachments/424889733043191810/428888675603185666/b710a35966ecbbf7988bf40bb47b0e4d-me-gusta-meme-face-by-vexels.png");

message.channel.send(megustafac)

}
module.exports.help = {
  name: "megusta"
}
