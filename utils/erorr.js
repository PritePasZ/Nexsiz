const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.noPerms = (message, perm) => {
  let embed = new Discord.RichEmbed()
      .setAuthor(message.member.displayName, message.author.displayAvatarURL)
      .setColor(config.red)
      .setDescription(`<a:boi:574472578832269338> Insufficient Permissions\n<a:pingshake:537598099749863435> Required : ${perm}`, true);

  message.channel.send(embed).then(m => m.delete(10000));

}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setColor(config.red)
        .setDescription(`a:boi:574472578832269338> ${user} have Moderator permissions`, ` Permission: ${perms}`);

    message.channel.send(embed).then(m => m.delete(10000));

}

module.exports.onlyOwner = (message) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setDescription("<a:boi:574472578832269338> Only <@346579836292300800> can execute this command!");

    message.channel.send(embed).then(m => m.delete(8000));
}
