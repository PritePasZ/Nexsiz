const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#ffa202")
  .setDescription("Here's the doggo!")
  .setImage(body.message);

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "dog"
}