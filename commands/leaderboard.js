const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

if (client.guilds.size < 10) return message.reply(`<:tickNo:576414524014329857> **เซิฟเวอร์ไม่พอสำหรับ leaderboard**`)

const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
let botembed = new Discord.RichEmbed()
.addField(`__**:bar_chart: Leaderboard**__`, `1. **${top[0].name}**: \`${top[0].memberCount}\` สมาชิกทั้งหมด\n2. **${top[1].name}**: \`${top[1].memberCount}\` สมาชิกทั้งหมด\n3. **${top[2].name}**: \`${top[2].memberCount}\` สมาชิกทั้งหมด\n4. **${top[3].name}**: \`${top[3].memberCount}\` สมาชิกทั้งหมด\n5. **${top[4].name}**: \`${top[4].memberCount}\` สมาชิกทั้งหมด\n6. **${top[5].name}**: \`${top[5].memberCount}\` สมาชิกทั้งหมด\n7. **${top[6].name}**: \`${top[6].memberCount}\` สมาชิกทั้งหมด\n8. **${top[7].name}**: \`${top[7].memberCount}\` สมาชิกทั้งหมด\n9. **${top[8].name}**: \`${top[8].memberCount}\` สมาชิกทั้งหมด\n10. **${top[9].name}**: \`${top[9].memberCount}\` สมาชิกทั้งหมด`)
.setAuthor(message.guild.name, message.guild.iconURL)
.setColor('#4286f4')
.setTimestamp()
message.channel.send(botembed);

}

module.exports.help = {
  name: "leaderboard"
}
