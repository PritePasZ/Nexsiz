const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  if (args[0] === undefined) {

    return message.channel.send("<:tickNo:576414524014329857> **โปรดใส่เลขเพื่อ unicode**");

  } else {

    let transArg = args[0].toLowerCase();

    if (transArg === undefined) {

      return message.channel.send("ลองพิมพ์ **1** เพื่อแปลงข้อความเป็น unicode");

    } else {

      if (transArg.length >= 2) {

        return message.channel.send(`<:tickNo:576414524014329857> ข้อความยาว ${message.author}, ใส่ได้แค่ **1** ตัวอักษรเท่านั้น`);

      }

      const embed = new Discord.RichEmbed()
      .setColor("#42f448")
      .setDescription(transArg.charCodeAt(0));

      return message.channel.send(embed);

    }

  }

}

module.exports.help = {

  name: 'unicode'
}
