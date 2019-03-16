const Discord require("discord.js");

module.exports.run = async (bot, message, args) => {
  client.on('message', message => {
      if (message.content === '!avatar') {
        // Remove the "var" line; it isn't necessary.
        let embed = new Discord.RichEmbed()
        // Replace "message.member" with "message.author"
      .setImage(message.author.avatarURL)
      .setAuthor(`${user.username}`, user.avatarURL)
      .setColor('#275BF0')
      .setFooter(`Shows the user avatar of ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(embed)
      }
  });}
