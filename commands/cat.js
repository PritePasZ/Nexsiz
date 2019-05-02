const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`http://edgecats.net/random`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#ffa202")
  .setDescription(":cat: Here's the random cat! <a:glitchcat:537598075502460941>")
  .setImage(body.message);

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "cat"
}
