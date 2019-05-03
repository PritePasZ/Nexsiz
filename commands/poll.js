const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**:x: You dont have Administrator Permission!**").then(msg => {msg.delete(5000)})
  if (!args[0]) return message.channel.send(":x: Please type some question.");
  var question = args.join(" ");
  let pollEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor("#f44141")
  .setTitle("<a:party10000:525854556815360001> Vote the message! <a:hyperpin:537598127407104020>")
  .setDescription(args.join(' '))
  .setFooter("React by click the emoji - Made by PritePasZ#3071")
  message.channel.send(pollEmbed).then(function (message) {
    message.react("✅")
    message.react("❌")
  });
}

module.exports.help = {
  name: "poll"
}
