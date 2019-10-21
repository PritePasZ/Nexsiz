const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = message.guild.channels.first().createInvite()
    let Owner = message.author;
    if(Owner.id !== "346579836292300800") return message.reply(":x: **Only the bot owner can use this command!**")

    const id = args.shift();
    const sayMessage = args.join(" ")
    if(!sayMessage) return message.reply("Usage `n!answer [id] [message]`")


   let contact = new Discord.RichEmbed()
   .setAuthor(Owner.username, Owner.avatarURL)
   .setColor("00ff00")
   .setThumbnail(Owner.displayAvatarURL)
   .setTitle(":computer: Response  from your contact")
   .addField((":incoming_envelope Response :", sayMessage)
   .setFooter("Support Server","[Nexsiz Server](https://discord.gg/mjypjna)")
   .setTimestamp();

    bot.users.get(id).send(contact);

    let chanemb = new Discord.RichEmbed()
    .setAuthor(Owner.username, Owner.avatarURL)
    .setColor("#f45342")
    .setDescription(`:pencil: Message sent to <@${id}>`)
    .setTimestamp()

    message.channel.send(chanemb).then(msg => {msg.delete(5000)});

        message.delete();


      }
      module.exports.help = {
        name: "answer",
        description: 'Owner Only',
        usage: 'answer <ID> <message>'
      }
