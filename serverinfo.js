const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let offline = message.guild.members.filter(member => member.user.presence.status == 'offline');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    let sicon = message.guild.iconURL;

    let serverembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name, sicon)
    .addField(`:bar_chart: \`Total Members\``, `\`${message.guild.memberCount}\``)
    .addField(`<:bustin:510814667564646410> \`Users\``, `\`${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}\``, true)
    .addField(`<:bot:511515593107570699> \`Bots\``, `\`${message.guild.members.filter(m => m.user.bot).size}\``, true)
    .addField(`<a:Green:511136179702333440> \`Online\``, `\`${online.size}\``, true)
    .addField(`<a:Grey:511137198557364224> \`Offline\``, `\`${offline.size}\``, true)
    .addField(`<:owner:511514761184280576> \`Owner\``, `\`${message.guild.owner.user.tag}\``, true)
    .addField(`:earth_americas: \`Region\``, `\`${message.guild.region}\``, true)
    .addField(`:card_index: \`Server ID\``, `\`${message.guild.id}\``, true)
    .addField(`:calendar: \`Join Date\``, `\`${message.member.joinedAt}\``, true)
    .setFooter(`📆 Server Created • ${day}.${month}.${year}`);

    message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}
