const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let user;
              //test typing here
    if (messsage.mentions.user.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);


    const embed = new Discord.RichEmbed()
                .setColor("#f44242")
                .setThumbnail(user.avatarURL)
                .setAuthor(`${user.username}`, user.avatarURL)
  .addField("<:bustinsilhouette:553086092837126145> Username", user.username#user.discriminator, true)
  .addField(":information_source: User ID", user.id, true)
               .addField(":card_index: Nickname", member.nickname !== null ? member.nickname : 'None', true)
               .addField(":robot: Bot Account", user.bot, true)
               .addField("<:online:553477759863619604> User Stat", user.presence.game.name : 'None', true)
               .addField(":joystick: User Activity", user.presence.game ? user.presence.game.name : 'None')
               .addField(":pushpin: Roles", member.roles.map(role => `<@&${roles.id}>`).join(', '), true)
  .addField(":calendar: Joined Guild Date", member.joinedAt, true)
  .addField(":calendar: Account Created Date", user.createdAt, true)
  .setFooter(`Shows the information of user, ${message.author.username}#${message.author.discriminator}`)
  message.channel.send({embed});
}

module.exports.help = {
  name: "userinfo"
}
