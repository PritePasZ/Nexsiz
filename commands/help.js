const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

  const pidor = message.guild.members.get(args[0]) || message.member;


let helpembed = new Discord.RichEmbed()
    .setColor(`00ff00`)
    .setAuthor(`Commands & Guides`, bot.user.avatarURL)
    .addField(`<:verified:478951608290508803> Support`, "`n!help` - Show a list of commands & guides to your DM.\n Found some bug?, Use `n!contact` to let us know!\nUse **n!invite** to invite <@552076002101297153> in to your server!")
    .setFooter(`Made By PriteToKung`)

    pidor.send(helpembed);
  
let infoembed = new Discord.RichEmbed()
    .setColor(`#00802b`)
    .addField(`<a:plexiOnline:478870259944783873> General Commands`, "`calculate/calc`n\`icon`\n`8ball`\n`avatar`\n`ping`\n`support`\n`serverinfo`\n`botinfo`\n`guilds`\n`leaderboard`\n`userinfo`\n`uptime`\n`unicode`\n`weather`")
    .addField(`<a:plexiAway:478870515730087939> Moderation Commands`, "`addrole`\n`ban`\n`unban`\n`clear`\n`report`\n`say`\n`removerole`\n`mute`\n`poll`\n`kick`\n`unmute`")
    .addField(`<a:plexiDnd:478869699455746049> Fun Commands`, "`butterfly`\n`cat`\n`dog`\n`reverse`\n`lenny`\n`pepe`\n`kill`\n`ram`\n`rps`\n`shrug`\n`clap`\n`megusta`\n`morse`\n`mock`\n`flip`\n`owner`\n`yomama`")
    .addField(`<a:plexiLive:478870308430938113> Miscellaneous`, "`steam`\n`apex`\n`minecraft`\n `fortnite`\n`r6`")
    .addField(`<:owner:596292514487599105> Owner Commands`, "`answer`\n`eval`")

    pidor.send(infoembed);



/* let musicembed = new Discord.RichEmbed()
    .setColor(`#41c1f4`)
    .addField(`<:headphone:553459778714730527> Music Commands`, `Music Commands is coming soon\nwaiting for PritePasZ will add the commands`)
    .setTimestamp()

  pidor.send(musicembed);*/

let dm = new Discord.RichEmbed()
    .setColor(`#409cd9`)
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(`<a:plexiOnline:478870259944783873> I have private messaged you a list of commands! <a:Rainbowpin:680461089057800241>`)
    .setTimestamp()

    message.channel.send(dm)

}
module.exports.help = {
  name: "help"
}
