const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://i.imgur.com/DYToB2e_d.jpg?maxwidth=640&shape=thumb&fidelity=medium`);

  let ramembed = new Discord.RichEmbed()
  .setColor("#fc03c6")
  .setImage(body.file);

  message.channel.send(ramembed);

}

module.exports.help = {
  name: "ram"
}
