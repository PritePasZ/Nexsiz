const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

  const pidor = message.guild.members.get(args[0]) || message.member;


let helpembed = new Discord.RichEmbed()
    .setColor(`00ff00`)
    .setAuthor(`Commands & Guides`, bot.user.avatarURL)
    .addField(`:grey_question: Support`, "`n!help` - Show a list of commands & guides to your DM.\n Found some bug?, Use `n!contact` to let us know!\nUse **n!invite** to invite <@552076002101297153> in to your server!")
    .setFooter("Made By PriteToKung")

    pidor.send(helpembed);
  
let infoembed = new Discord.RichEmbed()
    .setColor(`#00802b`)
    .addField(`:desktop: General Commands`, "`n!calculate/calc`n\`n!icon`\n`n!8ball`\n`n!avatar`\n`n!ping`\n`n!support`\n`n!serverinfo`\n`n!botinfo`\n`n!guilds`\n`n!leaderboard`\n`n!userinfo`\n`n!uptime`\n`n!unicode`\n`n!weather`")
    .addField(`:tools: Moderation Commands`, "`n!addrole`\n`n!ban`\n`n!unban`\n`n!clear`\n`n!report`\n`n!say`\n`n!removerole`\n`n!mute`\n`n!poll`\n``n!kick`\n`n!unmute`")
    .addField(`<:epic:596292541574283274> Fun Commands`, "`n!butterfly`\n`n!cat`\n`n!dog`\n`n!reverse`\n`n!lenny`\n`n!pepe`\n`n!kill`\n`n!ram`\n`n!rps`\n`n!shrug`\n`n!clap`\n`n!megusta`\n`n!morse`\n`n!mock`\n`n!flip`\n`n!owner`\n`n!yomama`")
    .addField(`:video_game: Miscellaneous`, "`n!steam`\n`n!apex`\n`n!minecraft`\n `n!fortnite`\n`n!r6`")
    .addField(`<:owner:596292514487599105> Owner Commands`, "`n!answer`\n`n!eval`")

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
