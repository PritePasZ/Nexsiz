const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor("#42f448")
  .setDescription(`:signal_strength: API Latency \n${client.ping}ms`)
  .setFooter("Made by PritePasZ#3071 - Version 0.1.3b")
   message.channel.send({embed});

}
module.exports.help = {
  name: "ping"
}
