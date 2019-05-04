const yoMamma = require('yo-mamma').default;

module.exports.run = async (bot, message, args) => {

    let insult = yoMamma();

let joke = new Discord.RichEmbed()
    .setColor("#3498db")
    .setDescription(insult)

    message.channel.send(joke);

}

module.exports.help = {
    name: "yomama"
}
