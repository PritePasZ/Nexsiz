const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    let rock2 = [":tada: Paper! I win!", "Scissors! You win!"]
    let rock1 = Math.floor(Math.random() * rock2.length);

    let paper2 = [":tada: Rock! You win!", "Scissors! I win!"]
    let paper1 = Math.floor(Math.random() * paper2.length);

    let scissors2 = [":tada: Rock! I win!", "Paper! You win!"]
    let scissors1 = Math.floor(Math.random() * scissors2.length);

  let rock = new Discord.RichEmbed()
  .setAuthor("Rock, Paper, Scissors")
  .setColor("#00BDFF")
  .addField("You Chose", `${args[0]}`)
  .addField("I Choose", rock2[rock1])

  let paper = new Discord.RichEmbed()
  .setAuthor("Rock, Paper, Scissors")
  .setColor("#00BDFF")
  .addField("You Chose", `${args[0]}`)
  .addField("I Choose", paper2[paper1])

  let scissors = new Discord.RichEmbed()
  .setAuthor("Rock, Paper, Scissors")
  .setColor("#00BDFF")
  .addField("You Chose", `${args[0]}`)
  .addField("I Choose", scissors2[scissors1])


  if (message.content === "n!rps rock") message.channel.send(rock)
  if (message.content === "n!rps Rock") message.channel.send(rock)
  if (message.content === "n!rps r") message.channel.send(rock)

  if (message.content === "n!rps paper") message.channel.send(paper)
  if (message.content === "n!rps Paper") message.channel.send(paper)
  if (message.content === "n!rps p") message.channel.send(paper)

  if (message.content === "n!rps scissors") message.channel.send(scissors)
  if (message.content === "n!rps Scissors") message.channel.send(scissors)
  if (message.content === "n!rps s") message.channel.send(scissors)


  if (message.content === "n!rps") message.channel.send("Options: ``Rock``, ``Paper``, ``Scissors``. *Usage: n!rps <option>*")
  }

module.exports.help = {
    name: "rps"
}
