const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

  const pidor = message.guild.members.get(args[0]) || message.member;


let helpembed = new Discord.RichEmbed()
    .setColor(`00ff00`)
    .setAuthor(`Commands & Guides`, bot.user.avatarURL)
    .addField(`:information_source: Support`, `**n!help** - Show a list of commands & guides to your DM.\n Found some bug?, Use **n!feedback** to let us know!\nUse **n!invite** to invite <@552076002101297153> in to your server!`)
    .setFooter("Made By PritePasZ", "https://cdn.discordapp.com/avatars/346579836292300800/b02ca29aee1ec133c84377bd4235e957.png")

    pidor.send(helpembed);

let generalembed = new Discord.RichEmbed()
    .setColor(`#4286f4`)
    .addField(`:desktop: General Commands`, `**n!icon** - gives you the server icon\n**n!id** - show ID of user\n**n!8ball** - random the answer from the question. \n**n!avatar** - show the avatar user.\n**n!ping** - Show the current user ping/ms.\n**n!support** - using for help\n**n!serverinfo** - Shows the information of the guild.\n**n!botinfo** - Shows the information of the bot.\nguilds - Shows a list of <@552076002101297153> guilds.\n**n!userinfo** Shows the information of your.\n**n!unicode** - change capital to number`)

    pidor.send(generalembed);

let moderatembed = new Discord.RichEmbed()
    .setColor(`#ff3a3a`)
    .addField(`:tools: Moderation Commands`, `**n!clear** [amount] - Clear the given amount of messages.\n**n!say** [text] - <@552076002101297153> will chat with your given text.\n**n!poll** - vote the message from user are typed.`)

    pidor.send(moderatembed);

let funembed = new Discord.RichEmbed()
    .setColor(`#f4b942`)
    .addField(`<:epic:452254851003318282> Fun Commands`, `\n**n!dog** - give the random image of dog.\n**n!cat** - give the random image of cat\n**n!reverse** - type to amount to reverse the message\n**n!lenny** - will message ( ͡° ͜ʖ ͡°)\n**n!pepe** - random pepe image.\n**n!kill** - or mention to kill him/her or suicide.\n**n!shrug** - ¯\\_\(ツ)\_\/¯ \n**n!clap** - puts 👏 between your message.\n**n!megusta** - <@552076002101297153> will message megusta image.\n**n!morse** - translate from text to morse code/translate from morse code to text.\n**n!mock** -  mock some texts.\n**n!flip** - to the message.\n**n!owner** - make someone to be owner. (troll command)`)

    pidor.send(funembed);

/* let musicembed = new Discord.RichEmbed()
    .setColor(`#41c1f4`)
    .addField(`<:headphone:553459778714730527> Music Commands`, `Music Commands is coming soon\nwaiting for PritePasZ will add the commands`)
    .setTimestamp()

  pidor.send(musicembed);*/

let ownerembed = new Discord.RichEmbed()
    .setColor("#ff6a00")
    .addField(`<:Owner:553078012283715636> Owner Commands`, `**n!answer** - answer from user are contact feedback.\n**n!eval** - evaluates javascript code.`)

    pidor.send(ownerembed)

let dm = new Discord.RichEmbed()
    .setColor(`#409cd9`)
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(`:mailbox_with_mail: I have private messaged you a list of commands!`)
    .setTimestamp()

    message.channel.send(dm)

}
module.exports.help = {
  name: "help"
}
