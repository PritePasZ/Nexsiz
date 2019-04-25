const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send("**:x: Type the amount of value to reverse the messages!**").then(msg => {msg.delete(5000)});
    }
    msg.reply(args.join(' ').split('').reverse().join(''));


}

module.exports.help = {
  name: "reverse"
}
