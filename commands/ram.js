const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ramEmbed = new Discord.RichEmbed()
  .setColor("#fc03c6")
  .setDescription(`<:smugram:634586554223820820> Here's Ram!`)
  .setImage(`https://cdn.discordapp.com/attachments/552376732964093963/634585194153639949/DYToB2e_d.jpg`);

  message.channel.send(ramEmbed);

}

module.exports.help = {
  name: "ram"
}
