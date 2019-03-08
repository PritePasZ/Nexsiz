const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let user;
    if (message.mentions.user.first())
        user = message.mentions.users.first();

    } else {
        user = message.author;
    }

    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
    .setColor("#4bf442")
    .setThumbnail(message.author.avatarURL)
    .setTitle(`${user.username}#${user.discriminator}`)
    .addField(":card_index: Nickname", `${member.nickname !== null ? `${member.nickname}`) : : 'None'}, true)
    .addField(":calendar: Created At", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH;mm:ss")}`, true)
    .addField(":robot: Bot Account", `${user.bot}`, true)
    .addField("<:online:553477759863619604> Status", `${user.presence.status}`, true)
    .addField(":joystick: Game", `${user.presence.game ? user.presence.game.name : 'None'}`)
    .addField("Roles", member.roles.map(roles => `${roles.name}`).join(`, `), true)
    message.channel.send({embed});

}

module.exports.help = {
  name: "userinfo"
}
