const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
    
  let clearbotcommandsystem = new Discord.RichEmbed()
  .setAuthour(message member.displayName, message.author.displayAvatarUR
  .setColor("f4aa42")
  .setTimeStamp()
  .setFooter("Message ${args[0]} has been cleared")
  .setDescription(`:wastebasket: Clear ${args[0]} messages.`)
  message.channel.send(clearbotcommandsystem).then(msg => {msg.delete(2000)});
});

}

module.exports.help = {
  name: "clear"
}
