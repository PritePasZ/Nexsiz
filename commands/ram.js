const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ramEmbed = new Discord.RichEmbed()
  .setColor("#fc03c6")
  .setImage(`https://i.imgur.com/DYToB2e_d.jpg?maxwidth=640&shape=thumb&fidelity=medium`);

  message.channel.send(ramEmbed);

}

module.exports.help = {
  name: "ram"
}
