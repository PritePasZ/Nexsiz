const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {

const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  let idembed = new Discord.RichEmbed(
  .setColor(f44242)
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setDescription(`:card_index: User ID : \`${member.user.id}\`.`);

}

module.exports.help = {
    name: "id"
}
