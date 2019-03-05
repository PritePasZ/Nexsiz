const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

    message.delete();
    let role = message.guild.roles.find(role => role.name === 'Verified Member ✔️');
    if (message.channel.name !== '✅verification✅') return message.reply(':no_entry: **You must go to the verification channel.**');
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#f44141')
            .setDescription(':no_entry: **Your account has already been verified!**')
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#75aaff')
            .setDescription('<:verified:512259245371031552> **Your account has been successfully verified.**')
        return message.channel.send((verifyEmbed));
    }
    
}
module.exports.help = {
  name: "verify"
}
