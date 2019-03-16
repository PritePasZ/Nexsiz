module.exports.run = async (bot, msg, args) => {
  let aTaged = msg.mentions.users.first();
  msg.channel.send(`${aTaged.displayAvatarURL}`);
}

module.exports.help = {
  name: "avatar"
}
