const Discord = require("discord.js");
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = (bot, message, args) => {
    if (args.length < 1) return message.channel.send(":x: **Please provide some text to Mock**")

    let mockEmbed = new Discord.RichEmbed()
    .setColor("f4f442")
    .setDescription(args.map(randomizeCase))
    .setImage("https://cdn.discordapp.com/attachments/424889733043191810/425242569325150208/mock.jpg");

    message.channel.send(mockEmbed);

}

module.exports.help = {
    name: "mock"
}
