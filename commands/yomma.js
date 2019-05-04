const yoMamma = require('yo-mamma').default;

module.exports.run = (bot, message, args) => {

  let insult = yoMamma();

  let yomammaEmbed = new Discord.RichEmbed()
    .setColor("#3498db")
    .setTitle("Here's Yo-mama Joke!")
    .addField("Yo-mama Joke", `${insult}`, true)

    message.channel.send(yomammaEmbed)


}

module.exports.help = {
  name: "yomama"
}
