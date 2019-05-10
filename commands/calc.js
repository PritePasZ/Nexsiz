const Discord = require("discord.js");
const math = require('mathjs');

module.exports.run = async (bot, message, args) => {

    let input = args.join(" ");
    if (!input) {
        const Discord = require('discord.js');
        let calculatorerrorstuff = new Discord.RichEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setColor("#f44242")
        .addField(`:x: **You must provide a equation to be solved on the calculator!**`, message.author)
        message.channel.send(calculatorerrorstuff).then(msg => {msg.delete(8000)});
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.reply(`:x: Invalid math equation: \`${err}\``);
    }

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setColor("#00c646")
        .setThumbnail("https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/1024/Calculator_5122x.png")
        .setTimestamp()
        .setDescription(`:straight_ruler: __**Math Calculation**__`)
        .addField(`:bar_chart: **Question**`, question, true)
        .addField(`:white_check_mark: **Answer**`, answer)

    message.channel.send(embed);

}

module.exports.help = {
  name: "calc"
}
