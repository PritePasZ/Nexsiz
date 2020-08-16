const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**<:tickNo:576414524014329857> ไม่มี Manage Messages Permission**").then(msg => {msg.delete(5000)})
  if (!args[0]) return message.channel.send("<:tickNo:576414524014329857> โปรดใส่คำถาม");
  var question = args.join(" ");
  let pollEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor("#f44141")
  .setTitle(":tada: Vote ข้อความ")
  .setDescription(args.join(' '))

  message.channel.send(pollEmbed).then(function (message) {
    message.react("✅")
    message.react("❌")
  });
}

module.exports.help = {
  name: "poll"
}
