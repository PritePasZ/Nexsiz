const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get (`https://dog.ceo/api/breeds/image/random`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#f44242")
  .setTitle("Here Is Doggo. :dog:")
  .setFooter("📋 Picture Here!")
  .setTimeStamp()
  .setImage(body.url);

   message.channel.send(dogembed);

}

module.exports.help = {
  name: "doggo"
}
