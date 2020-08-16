const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let bname = bot.user.username;
  let inviteembed = new Discord.RichEmbed()
  .setColor("#4286f4")
  .setAuthor(bname, bicon)
  .setURL("https://discordapp.com/oauth2/authorize?client_id=552076002101297153&scope=bot&permissions=2146954495")
  .setDescription(":thumbsup: **ชวนบอท?, Just click at up there!**")
  .setTitle(":arrow_right: คลิกตรงนี้เพื่อเขิญ Bangyat ชวนดิสคอร์ตเซิฟเวอร์ <:plus_1:557908827840970773>")
  .setFooter("ผู้สร้าง PriteToKung")
  .setTimestamp();

  message.channel.send(inviteembed);
}

module.exports.help = {
  name: "invite"
}
