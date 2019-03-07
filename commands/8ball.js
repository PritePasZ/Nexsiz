const Discord = require("discord.js");

module.exports.run = async (bot, messagem args) => {


  if(!args[2]) return message.reply(":exclamation: Please ask a full question");
  let replies = ["Yes.", "No.", "I dont know.", "Ask again later"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#f44242")
  .addField("Question", question)
  .addField("Anwer", replies[result]);

  message.channel.send(ballembed)  ;

}

module.exports.help = {
  name: "8ball"
}
