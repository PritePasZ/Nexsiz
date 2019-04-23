const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let bname = bot.user.username;
  let inviteembed = new Discord.RichEmbed()
  .setColor("#4286f4")
  .setThumbnail(bicon)
  .setAuthor(bname, bicon)
  .setURL("https://discordapp.com/api/oauth2/authorize?client_id=552076002101297153&permissions=8&scope=bot")
  .setTimestamp()
  .setTitle("Click here to invite Nexsiz in to your server!")
  .setFooter("Made by PritePasZ","https://cdn.discordapp.com/avatars/346579836292300800/b02ca29aee1ec133c84377bd4235e957.png");

  message.channel.send(inviteembed);
}

module.exports.help = {
  name: "invite"
}
