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
    .addField(`:desktop: General Commands`, `**n!help** - Show a list of commands & guides to your DM.\n**n!feedback** - reports bug and contact to <@346579836292300800>.\n**n!invite** - to invite <@552076002101297153> in to your server.\n**n!icon** - gives you the server icon\n**n!id** - show ID of user\n**n!8ball** - random the answer from the question. \n**n!avatar** - show the avatar user.\n**n!ping** - Show the current user ping/ms.\n**n!support - using for help**\n**n!serverinfo** - Shows the information of the guild.\n**n!botinfo** - Shows the information of the bot.\n**n!userinfo** Shows the information of your.\n**n!unicode** - change capital to number`)
    .addField(`:tools: Moderation Commands`, `**n!clear** [amount] - Clear the given amount of messages.\n**n!say** [text] - <@552076002101297153> will chat with your given text.\n**n!poll** - vote the message from user are typed.`)
    .addField(`<:epic:452254851003318282> Fun Commands`, `**n!reverse** - type to amount to reverse the message\n**n!lenny** - will message ( ͡° ͜ʖ ͡°)\n**n!pepe** - random pepe image.\n**n!kill** - or mention to kill him/her or suicide.\n**n!shrug** - ¯\\_\(ツ)\_\/¯ \n**n!clap** - clapify at the space of message.\n**n!megusta** - <@552076002101297153> will message megusta image.\n**n!morse** - translate from text to morse code/translate from morse code to text.\n**n!mock** - put the text to mock.\n**n!flip** - to the message.`)
    .addField(`<:headphone:553459778714730527> Music Commands`, `Music Commands is coming soon\nwaiting for PritePasZ will add the commands`)
    .setFooter("Made By PritePasZ", "https://cdn.discordapp.com/avatars/346579836292300800/b02ca29aee1ec133c84377bd4235e957.png")
    .setTimestamp()
    message.author.send(helpembed);

}
module.exports.help = {
  name: "help"
}
