const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = message.guild.channels.first().createInvite()
    let Owner = message.author;
    if(Owner.id !== "346579836292300800" && Owner.id !== "425304774502645764") return message.reply(":x: **เฉพาะ PriteToKung สามารถใส่คำสั่งนี้ได้**")

    const id = args.shift();
    const sayMessage = args.join(" ")
    if(!sayMessage) return message.reply("การใช้งาน: `b!answer [id] [message]`")


   let contact = new Discord.RichEmbed()
   .setAuthor(Owner.username, Owner.avatarURL)
   .setColor("00ff00")
   .setThumbnail(Owner.displayAvatarURL)
   .setTitle(":computer: Response  from your contact")
   .addField(":incoming_envelope: Response :", sayMessage)

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
