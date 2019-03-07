const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("no");
  let serverembed = new Discord.RichEmbed()
  .setColor("0ED4DA")
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`:wastebasket: Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}
