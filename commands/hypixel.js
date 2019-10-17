const Discord = require("discord.js");
const request = require("request");
const moment = require('moment');
const HypixelAPI = require('hypixel-api');
const client = new HypixelAPI(process.env.hypixel);

module.exports.run = async (bot, message, args) => {
    
let user = args.slice(0).join(" ");
var json = JSON.parse(jsonString);

client.getPlayer('name', user).then((player) => {
    console.log(player)
    message.reply(json.player.networkExp)
}).catch((err) => {
    //console.error('Error! ' + err)
    message.channel.send(`:no_entry: Usage: !player <name>`)
})

}

module.exports.help = {
  name: "hypixel"
}
