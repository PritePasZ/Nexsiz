const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

  const pidor = message.guild.members.get(args[0]) || message.member;


let helpembed = new Discord.RichEmbed()
    .setColor(`00ff00`)
    .setAuthor(`Commands & Guides`, bot.user.avatarURL)
    .addField(`:information_source: Support`, `**n!help** - Show a list of commands & guides to your DM.\n Found some bug?, Use **n!contact** to let us know!\nUse **n!invite** to invite <@552076002101297153> in to your server!`)
    .setFooter("Made By PriteToKung")

    pidor.send(helpembed);

let generalembed = new Discord.RichEmbed()
    .setColor(`#4286f4`)
    .addField(`:desktop: General Commands`, `**n!calculate/calc [question]** - Solve the math question.\n**n!icon** - Gives you the server icon\n**n!8ball [text]** - Random the answer from the question. \n**n!avatar [user]** - Show the avatar user.\n**n!ping** - Show the current user ping/ms.\n**n!support** - Using for help\n**n!serverinfo** - Shows the information of the guild.\n**n!botinfo** - Shows the information of the bot.\n**n!guilds** - Shows a list of <@552076002101297153> guilds.\n**n!leaderboard** - Shows a list of <@552076002101297153> guilds, from the most members to least.\n**n!userinfo [user]** Shows the information of your.\n**n!uptime** - Showing online time of <@552076002101297153>.\n**n!unicode [text]** - Change text/number to unicode\n**n!weather [province/city/state]** - Show the current weather statistics.`)

    pidor.send(generalembed);

let moderatembed = new Discord.RichEmbed()
    .setColor(`#ff3a3a`)
    .addField(`:tools: Moderation Commands`, `**n!ban [user]** - Ban user from the server\n**n!clear [amount]** - Clear the given amount of messages.\n**n!report [user]** - report user to a guild\n**n!say [text]** - <@552076002101297153> Will chat with your given text.\n**n!removerole [user] [role]** - remove role from there user.\n**n!mute [user 1s/m/h/d]** - Mute user.\n**n!poll [text]** - Vote the message by reaction.\n**n!kick [user]** - Kick uset from the server.\n**n!unmute [user]** - Unmute user.`)

    pidor.send(moderatembed);

let funembed = new Discord.RichEmbed()
    .setColor(`#f4b942`)
    .addField(`<:epic:596292541574283274> Fun Commands`, `**n!butterfly** - Bot wil message Ƹ̵̡Ӝ̵̨̄Ʒ back.\n**n!cat** - Give a random image of cat\n**n!dog** - Give a random image of dog.\n**n!reverse [text]** - Type to amount to reverse the message.\n**n!joke** - Send random joke.\n**n!lenny** - Bot will message ( ͡° ͜ʖ ͡°) back\n**n!pepe** - Random pepe image.\n**n!kill [user]** - Or mention to kill him/her or suicide.\n**n!ram** - Give an image Ram as ram\n**n!rps** - play rock,paper,scissors with me\n**n!shrug** - ¯\\_\(ツ)\_\/¯ \n**n!clap [text]** - Puts 👏 between👏your👏message.\n**n!megusta** - <@552076002101297153> Will message megusta image.\n**n!morse [text]** - Translate from text to morse code/translate from morse code to text.\n**n!mock [text]** -  Mock some texts.\n**n!flip [text]** - Turn message in to flip text.\n**n!owner [user]** - Make someone to become an owner. (Troll Command)\n**n!yomama** - Give a yo-mama joke.`)

    pidor.send(funembed);

/* let musicembed = new Discord.RichEmbed()
    .setColor(`#41c1f4`)
    .addField(`<:headphone:553459778714730527> Music Commands`, `Music Commands is coming soon\nwaiting for PritePasZ will add the commands`)
    .setTimestamp()

  pidor.send(musicembed);*/

let ownerembed = new Discord.RichEmbed()
    .setColor("#ff6a00")
    .addField(`<:owner:596292514487599105> Owner Commands`, `**n!answer** - Answer from user are contact feedback.\n**n!eval** - Evaluates javascript code.`)

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
