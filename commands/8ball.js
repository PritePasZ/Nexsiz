const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[1]) return message.reply("Please ask a full question! :clipboard: ");
  let replies = ["Yes.", "No.", "Probably?"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .setColor('#50f442')
  .addField("Question", question)
  .addField("Answer", replies[result])
  .setTimestamp()

  message.channel.send(ballembed);

}

module.exports.help = {
  name: "8ball"
}
