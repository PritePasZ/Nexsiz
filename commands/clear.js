
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**:x: You dont have Manage Messages Permission!**");
  if(!args[0]) return message.channel.send("**:x: Type the amount of value to clear the messages**!");
  message.channel.bulkDelete(args[0]).then(() => {

    let clearbotcommandsystem = new Discord.RichEmbed()
    .setColor("#f49242")
    .setDescription(`:wastebasket: Cleared ${args[0]} messages.`)
    .setFooter("📋 Messages has been cleared.")
    .setTimestamp()
    message.channel.send(clearbotcommandsystem).then(msg => {msg.delete(5000)});
  });

}

module.exports.help = {
  name: "clear"
}
