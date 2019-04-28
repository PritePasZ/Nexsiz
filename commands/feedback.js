const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembed = new Discord.RichEmbed()
    .setColor("#f44242")
    .addField("Feedback Command", "**Usage: n!feedback <reason>**")

    message.channel.send(helpembed);
    return;
  }

    let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("**Please give us reason for feedback report.**").then(msg => {msg.delete(5000)});

   let contact = new Discord.RichEmbed()
   .setColor("#41c4f4")
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`:inbox_tray: Contact message from [${message.guild.name}](${Invite.url})`)
   .setTitle("Message from contact command!")
   .addField("<:bustinsilhouette:553086092837126145> User", Sender, true)
   .addField(":card_index: User ID: ", Sender.id, true)
   .addField(":incoming_envelope: Message: ", sayMessage)
   .setTimestamp()

    bot.users.get("346579836292300800").send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("#f44141")
    .setTitle("Message Sent!")
    .setDescription("Your Feedback message has been sent!")
    .addField(":envelope_with_arrow: Reqested by ", Sender)
    .addField(":incoming_envelope: Message: ", sayMessage)
    .setFooter("Thanks you for contacting with the Nexsiz support!")

    message.channel.send(embed).then(msg => {msg.delete(10000)});


      }
      module.exports.help = {
        name: "contact"
      }
