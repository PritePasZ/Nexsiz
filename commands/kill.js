const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

let killed = message.mentions.members.first();
if(!killed) {

let emb = new Discord.RichEmbed()
.setColor("#f44242")
.setDescription(`${message.author} **decied to kill himself/herself** 💔 **REST IN PEACE**`)

message.channel.send(emb)

} else {

let emb = new Discord.RichEmbed()
.setColor("#f44242")
.setDescription(`${killed} **was killed by** ${message.author} 💔 **REST IN PEACE**`)

message.channel.send(emb)


}

}
module.exports.help = {
  name: "kill"
}
