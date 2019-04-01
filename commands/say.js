const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**:x: You dont have **Manage Messages** Permission!**").then(msg => {msg.delete(5000)});
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}
