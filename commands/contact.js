const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("**โปรดใส่เหตุผลในการติดต่อ**").then(msg => {msg.delete(5000)});

   let contact = new Discord.RichEmbed()
   .setColor("#41c4f4")
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`:inbox_tray: การติดต่อ [${message.guild.name}](${Invite.url})`)
   .setTitle("ข้อความจากการติดต่อ")
   .addField("<:bustinsilhouette:553086092837126145> ผู้ใช่", Sender, true)
   .addField(":card_index: ID ผู้ใช้: ", Sender.id, true)
   .addField(":incoming_envelope: ข้อความ: ", sayMessage)
   .setTimestamp()

    bot.users.get("346579836292300800").send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("#f44141")
    .setTitle("Message Sent!")
    .setDescription("ข้อความติดต่อได้ส่งแล้ว")
    .addField(":envelope_with_arrow: จาก ", Sender)
    .addField(":incoming_envelope: ข้อความ: ", sayMessage)
    .setFooter("ขอบคุณสำหรับการติดต่อ")

    message.channel.send(embed);


      }
      module.exports.help = {
        name: "contact"
      }
