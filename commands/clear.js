const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
    
  let clearbotcommandsystem = new Discord.RichEmbed()
  .setAuthour(message member.displayName, message.author.displayAvatarURL)
  .setColor("f4aa42")
  .setDescription(`:wastebasket: Clear ${args[0]} messages.`)
  .setTimeStamp()
  message.channel.send(clearbotcommandsystem).then(msg => {msg.delete(2000)});
});

}

module.exports.help = {
  name: "clear"
}
