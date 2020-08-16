const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

  const pidor = message.guild.members.get(args[0]) || message.member;


let helpembed = new Discord.RichEmbed()
    .setColor(`00ff00`)
    .setAuthor(`Commands & Guides`, bot.user.avatarURL)
    .addField(`:grey_question: Support`, `**n!help** - Show a list of commands & guides to your DM.\n Found some bug?, Use **n!contact** to let us know!\nUse **n!invite** to invite <@552076002101297153> in to your server!`)
    .setFooter("Made By PriteToKung")

    pidor.send(helpembed);
  
let infoembed = new Discord.RichEmbed()
    .setColor(`#00802b`)
    .addField(`:information_source: Informations Command`, `**n!minecraft**, **n!fortnite**`)
    .addField(`:desktop: General Commands`, `**n!calculate/calc**, **n!icon**, **n!8ball**, **n!avatar**, **n!ping**, **n!support**, **n!serverinfo**, **n!botinfo**, **n!guilds**, **n!leaderboard**, **n!userinfo**, **n!uptime**, **n!unicode**, **n!weather**`)
    .addField(`:tools: Moderation Commands`, `**n!addrole**, **n!ban**,**n!unban**, **n!clear**, **n!report**, **n!say**, **n!removerole**, **n!mute**, **n!poll **, **n!kick**, **n!unmute**`)
    .addField(`<:epic:596292541574283274> Fun Commands`, `**n!butterfly**, **n!cat**, **n!dog**, **n!reverse**, **n!lenny**, **n!pepe**, **n!kill**, **n!ram**, **n!rps**, **n!shrug**, **n!clap**, **n!megusta**, **n!morse**, **n!mock**, **n!flip**, **n!owner**, **n!yomama**`)
    .addField(`<:owner:596292514487599105> Owner Commands`, `**n!answer**, **n!eval**`)

    pidor.send(infoembed);



/* let musicembed = new Discord.RichEmbed()
    .setColor(`#41c1f4`)
    .addField(`<:headphone:553459778714730527> Music Commands`, `Music Commands is coming soon\nwaiting for PritePasZ will add the commands`)
    .setTimestamp()

  pidor.send(musicembed);*/

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
