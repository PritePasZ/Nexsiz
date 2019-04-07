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
    .addField(`:desktop: General Commands`, `**n!help** - Show a list of commands & guides to your DM.\n**n!ping** - Show the current user ping/ms.\n**n!serverinfo** - Shows the information of the guild.\n**n!botinfo** - Shows the information of the bot.\n**n!userinfo** Shows the information of your`)
    .addField(`:tools: Moderation Commands`, `**n!clear** [amount] - Clear the given amount of messages.\n**n!say** [text] - <@552076002101297153> will chat with your given text.`)
    .addField(`<:headphone:553459778714730527> Music Commands`, `Music Commands is coming soon\nwaiting for PritePasZ will add the commands`)
    .setTimestamp()
    message.author.send(helpembed);

}
module.exports.help = {
  name: "help"
}
