const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

let dm = new Discord.RichEmbed()
    .setColor(`#409cd9`)
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(`:mailbox_with_mail: I have private messaged you a list of commands!`)
    .setTimestamp()
    message.channel.send(dm);

let helpembed = new Discord.RichEmbed()
    .setColor(`#4286f4`)
    .setAuthor(`Commands & Guides`, bot.user.avatarURL)
    .addField(`:desktop: General Commands`, `--help - Show a list of commands & guides to your DM.\n--ping - Show the current bot ping/ms.\n--serverinfo - Shows the information of the guild.\n--botinfo - Shows the information of the bot.\n--say - message that bot will said\n--clear - clear the message in the chat`)
    .addField(`:tools: Moderation Commands`, `--clear [amount] - Clear the given amount of messages.\n--say [text] - <@552076002101297153> will chat with your given text.`)
    .addField(`<:headphone:553459778714730527> Music Commands`, `Music Commands is coming soon\nwaiting for PritePasZ will add the commands`)
    .setTimestamp()
    message.author.send(helpembed);

}
module.exports.help = {
  name: "help"
}
