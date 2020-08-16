const Discord = require("discord.js");
const weather = require('weather-js');
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (result === undefined || result.length === 0) {
          let notvalidlocation = new Discord.RichEmbed()
          .setAuthor(message.member.displayName, message.author.displayAvatarURL)
          .setColor(config.red)
          .setDescription(`<:tickNo:576414524014329857> **โปรดระบุตำแหน่ง**`);
          message.channel.send(notvalidlocation)
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`บรรยากษของ ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor('RANDOM')
          .addField(':watch: Timezone',`UTC${location.timezone}`, true)
          .addField(':information_source: หน่วยวัดอุณหภูมิ',`${location.degreetype}`, true)
          .addField(':thermometer: อุณหภูมิ',`${current.temperature} °${location.degreetype}`, true)
          .addField('<:thonk:602447808078938112> ดูเหมือน', `${current.feelslike} °${location.degreetype}`, true)
          .addField(':dash: ลม',`${current.winddisplay}`, true)
          .addField(':sweat_drops: ความชื้น', `${current.humidity}%`, true)
          .setTimestamp()
          message.channel.send({embed});
  })

}

module.exports.help = {
  name: "weather"
}
