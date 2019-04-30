const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = message.guild.channels.first().createInvite()
    let Owner = message.author;
    if(Owner.id !== "346579836292300800") return message.reply(":x: **Only the bot owner can use this command!**")

    const id = args.shift();
    const sayMessage = args.join(" ")
    if(!sayMessage) return message.reply("Usage `n!answer ID  your message`")


   let contact = new Discord.RichEmbed()
   .setAuthor(Owner.username, Owner.avatarURL)
   .setColor("00ff00")
   .setThumbnail(Owner.displayAvatarURL)
   .setTitle(":inbox_tray: Response  from your contact!")
   .addField(":inbox_tray: Response:", sayMessage)
   .setFooter("Support Server", "[PritePasZ | Discord Server™](https://discord.gg/P96Pr33)")
   .setTimestamp()

    bot.users.get(id).send(contact);

    let chanemb = new Discord.RichEmbed()
    .setAuthor(Owner.username, Owner.avatarURL)
    .setColor("#f45342")
    .setDescription(`Message sent to <@${id}>`)

    message.channel.send(chanemb)


      }
      module.exports.help = {
        name: "answer",
        description: 'Owner Only',
        usage: 'answer <ID> <message>'
      }
