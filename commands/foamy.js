const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send({
        embed: {
          title: "FOAMY IS ON TOP!",
          description: ":information_source: Foamy Info",
          color: 0x00ff00,
          fields: [
            {
              name: "Who is Foamy??",
              value: "Foamy is pidor",
              inline:false
            },
            {
              name: "Steam",
              value: "[Steam Profile](https://steamcommunity.com/id/pritepasz/)",
              inline: true
            },
            {
              name: "Twitter",
              value: "[Twitter](https://twitter.com/prite_z)"
              inline: true
            },
            {
              name: "Discord",
              value: "[Foamy's Freaks](https://discord.gg/P96Pr33)",
              inline: true
            }
          ]
        }
    })

}
  module.exports.help = {
    name: "foamy"
  }
