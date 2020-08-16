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
    .addField(`:card_index: ID ผู้ใช้`, `${user.id}`, true)
		.addField(`:clipboard: ชื่อเล่น`, `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField(`<a:plexiOnline:478870259944783873> สถานะผู้ใช้`, `${user.presence.status}`, true)
    .addField(`:robot: บัญชีบอท`, `${user.bot}`, true)
		.addField(`:joystick: Activity ผู้ใช้`, `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField(`:calendar: วันที่เข้ารวมเซิฟเวอร์`, `${member.joinedAt}`, true)
    .addField(`:calendar: วันที่ผู้ใช้สร้าง`, `${user.createdAt}`, true)
    .addField(`:pushpin: บทบาท`, member.roles.map(roles => `<@&${roles.id}>`).join(', '), true)
    .setFooter(`แสดงข้อมูลของ ${message.author.username}#${message.author.discriminator}`)
     message.channel.send({embed});
}

module.exports.help = {
  name: "userinfo"
}
