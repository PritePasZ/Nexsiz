const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

if (client.guilds.size < 10) return message.reply(`<:tickNo:576414524014329857> **Not enough servers for the leaderboard!**`)

const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
let botembed = new Discord.RichEmbed()
.addField(`__**:bar_chart: Leaderboard**__`, `1. **${top[0].name}**: \`${top[0].memberCount}\` Total Members.\n2. **${top[1].name}**: \`${top[1].memberCount}\` Total Members.\n3. **${top[2].name}**: \`${top[2].memberCount}\` Total Members.\n4. **${top[3].name}**: \`${top[3].memberCount}\` Total Members.\n5. **${top[4].name}**: \`${top[4].memberCount}\` Total Members.\n6. **${top[5].name}**: \`${top[5].memberCount}\` Total Members.\n7. **${top[6].name}**: \`${top[6].memberCount}\` Total Members.\n8. **${top[7].name}**: \`${top[7].memberCount}\` Total Members.\n9. **${top[8].name}**: \`${top[8].memberCount}\` Total Members.\n10. **${top[9].name}**: \`${top[9].memberCount}\` Total Members.`)
.setAuthor(message.guild.name, message.guild.iconURL)
.setColor('#4286f4')
.setTimestamp()
message.channel.send(botembed);

}

module.exports.help = {
  name: "leaderboard"
}
