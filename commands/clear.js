const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**<:tickNo:576414524014329857> You dont have Manage Messages Permission!**").then(msg => {msg.delete(5000)});
  if(args >= 100) return message.channel.send("<:tickNo:576414524014329857> You cannot clear more than 100 messages at one time!").then(msg => {msg.delete(5000)});
  if(!args[0]) return message.channel.send("**<:tickNo:576414524014329857> Type the amount of value to clear the messages!**").then(msg => {msg.delete(5000)});
  message.channel.bulkDelete(args[0]).then(() => {


    let clearbotcommandsystem = new Discord.RichEmbed()
    .setColor("#f49242")
    .setDescription(`**:wastebasket: Cleared** **${args[0]}** **messages.**`)
    .setFooter("📋 Messages has been cleared.")
    .setTimestamp()
    message.channel.send(clearbotcommandsystem).then(msg => {msg.delete(5000)});
  });

}

module.exports.help = {
  name: "clear"
}
