
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

    const useruser = 'Command ran by: ' + message.author.username;
    const userurl = message.author.avavtarURL;
    
    let embed = new Discord.RichEmbed() // Remember to use .MessageEmbed() if you use the master version
        .setColor(0x43f033)
        .setDescription(`Loading...`)
        .setTimestamp()
    message.channel.send(embed).then(message => {
        embed.setColor(0x43f033)
        embed.setDescription(`:ping_pong: Pong! **\`${client.pings[0]}ms\`**`)
        embed.setFooter(useruser, userurl)
        embed.setTimestamp()
        message.channel.send(embed);

} 
module.exports.help = {
  name: "ping"
}
