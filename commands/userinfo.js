const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let user;
	// test typing here
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);


    const embed = new Discord.RichEmbed()
		.setColor('#65f442')
		.setThumbnail(user.avatarURL)
		.setAuthor(`${user.username}`, user.avatarURL)
    .addField("<:bustinsilhouette:553086092837126145> Username", `${user.username}#${user.discriminator}`,true)
    .addField(`:card_index: User ID`, `${user.id}`, true)
		.addField(`:clipboard: Nickname`, `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField(`<:online:553477759863619604> User Status`, `${user.presence.status}`, true)
    .addField(`:robot: Bot Account`, `${user.bot}`, true)
		.addField(`:joystick: User Activity`, `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField(`:calendar: Joined Guild Date`, `${member.joinedAt}`, true)
    .addField(`:calendar: Account Creation Date`, `${user.createdAt}`, true)
    .addField(`:pushpin: Roles`, member.roles.map(roles => `<@&${roles.id}>`).join(', '), true)
    .setFooter(`Shows the information of ${message.author.username}#${message.author.discriminator}`)
     message.channel.send({embed});
}

module.exports.help = {
  name: "userinfo"
}
