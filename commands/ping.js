const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor("#42f448")
  .setDescription(`:computer: **API Latency** - ${client.pings[0]}ms`)
  .setFooter("Made by PritePasZ#3071")
   message.channel.send({embed});

}

module.exports.help = {
  name: "ping"
}
