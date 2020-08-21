const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    let rock2 = [":paper: Paper!, บอทชนะ!", "Scissors! ผู้เล่นชนะ"]
    let rock1 = Math.floor(Math.random() * rock2.length);

    let paper2 = ["Rock!, ผู้เล่นชนะ!", "Scissors!, บอทชนะ"]
    let paper1 = Math.floor(Math.random() * paper2.length);

    let scissors2 = ["Rock, บอทชนะ", "Paper!, ผู้เล่นชนะ"]
    let scissors1 = Math.floor(Math.random() * scissors2.length);

  let rock = new Discord.RichEmbed()
  .setAuthor("🎮 Rock, Paper, Scissors 🎮")
  .setColor("#00BDFF")
  .addField("ผู้เล่นได้เลือก", `${args[0]}`)
  .addField("บอทได้เลือก", rock2[rock1])

  let paper = new Discord.RichEmbed()
  .setAuthor("🎮 Rock, Paper, Scissors 🎮")
  .setColor("#00BDFF")
  .addField("ผู้เล่นได้เลือก", `${args[0]}`)
  .addField("บอทได้เลือก", paper2[paper1])

  let scissors = new Discord.RichEmbed()
  .setAuthor("🎮 Rock, Paper, Scissors 🎮")
  .setColor("#00BDFF")
  .addField("ผู้เล่นได้เลือก", `${args[0]}`)
  .addField("บอทได้เลือก", scissors2[scissors1])


  if (message.content === "b!rps rock") message.channel.send(rock)
  if (message.content === "b!rps Rock") message.channel.send(rock)
  if (message.content === "b!rps r") message.channel.send(rock)

  if (message.content === "b!rps paper") message.channel.send(paper)
  if (message.content === "b!rps Paper") message.channel.send(paper)
  if (message.content === "b!rps p") message.channel.send(paper)

  if (message.content === "b!rps scissors") message.channel.send(scissors)
  if (message.content === "b!rps Scissors") message.channel.send(scissors)
  if (message.content === "b!rps s") message.channel.send(scissors)


  if (message.content === "b!rps") message.channel.send("Options: ``Rock``, ``Paper``, ``Scissors``. *Usage: b!rps <ตัวเลือก>*")
  }

module.exports.help = {
    name: "rps"
}
