const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let bname = bot.user.username;
  let inviteembed = new Discord.RichEmbed()
  .setColor("#4286f4")
  .setAuthor(bname, bicon)
  .setURL("https://discordapp.com/oauth2/authorize?client_id=552076002101297153&scope=bot&permissions=2146954495")
  .setDescription(":thumbsup::skin-tone-1: **Want to invite Nexsiz?, Just click at up there!**")
  .setTitle(":arrow_right: Click here to invite Nexsiz in to your server! <:plus_1:557908827840970773>")
  .setFooter("Made by PritePasZ","https://cdn.discordapp.com/avatars/346579836292300800/63ca26aec73a01c20bd6f0f97667186f.png")
  .setTimestamp();

  message.channel.send(inviteembed);
}

module.exports.help = {
  name: "invite"
}
