const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let serverembed = new Discord.RichEmbed()
  .setTitle("ข้อมูลของเซิฟเวอร์")
  .setColor("0ED4DA")
  .setThumbnail(message.guild.iconURL)
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .addField(":bar_chart: สมาชิกในเซิฟ", message.guild.memberCount)
  .addField("<:bustinsilhouette:553086092837126145> เป็นผู้ใช้", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
  .addField(":robot: เป็นบอท", message.guild.members.filter(m => m.user.bot).size, true)
  .addField("<:owner:596292514487599105> ผู้สร้างเซิฟเวอร์", message.guild.owner.user.tag, true)
  .addField(":earth_asia: ประเทศของเซิฟเวอร์", message.guild.region, true)
  .addField(":card_index: เซิฟเวอร์ ID", message.guild.id, true)
  .addField(":clipboard: เข้าร่วมวันที่", message.member.joinedAt, true)
  .addField(":calendar: วันที่เซิฟเวอร์สร้าง", message.guild.createdAt, true)
  .setFooter("📋 ข้อมูลเกี่ยวกับเซิร์ฟเวอร์");

  message.channel.send(serverembed);
}


module.exports.help = {
  name: "serverinfo",
  description: "Gathers information about the server."
}
