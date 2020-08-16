const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**<:tickNo:576414524014329857> ไม่มี Manage Messages Permission**").then(msg => {msg.delete(5000)});
  if(args >= 100) return message.channel.send("<:tickNo:576414524014329857> ไม่สามารถลบได้เก็น 100 ข้อความ").then(msg => {msg.delete(5000)});
  if(!args[0]) return message.channel.send("**<:tickNo:576414524014329857> โปรดใส่จำนวนเลขในการลบข้อความ**").then(msg => {msg.delete(5000)});
  message.channel.bulkDelete(args[0]).then(() => {


    let clearbotcommandsystem = new Discord.RichEmbed()
    .setColor("#f49242")
    .setDescription(`**:wastebasket: ลบข้อความไป ** **${args[0]}** **messages.**`)
    .setFooter("📋 ข้อความถูกลบแล้ว")
    .setTimestamp()
    message.channel.send(clearbotcommandsystem).then(msg => {msg.delete(5000)});
  });

}

module.exports.help = {
  name: "clear"
}
