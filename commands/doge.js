const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#ffa202")
  .setDescription("<a:Confused_Dog:527090543117860864> Here's the doge! <:doge:444095123496632330>")
  .setImage(body.message);

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "doge"
}
