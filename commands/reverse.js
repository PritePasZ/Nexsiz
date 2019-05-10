const Discord = require("discord.js");

module.exports.run = function (bot, msg, args) {
    if (args.length < 1) return message.channel.send("<:tickNo:315009174163685377> Please inpit the text to be reversed!").then(msg => {msg.delete(5000)});

    }
    msg.reply(args.join(' ').split('').reverse().join(''));


}

module.exports.help = {
  name: "reverse"
}
