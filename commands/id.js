const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {

const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let idembed = new Discord.RichEmbed()
  .setDescription(`:card_index: User ID : \`${member.user.id}\`.`);
  .setFooter("Searched by " + message.author.tag);

}

module.exports.help = {
    name: "id"
}
