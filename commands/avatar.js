const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send("<a:loading:573815730504597505> Generating avatar...").then(m => m.delete(1000)); 

let mentionedUser = message.mentions.users.first() || message.author;

let avatarembed = new Discord.RichEmbed()
.setImage(mentionedUser.displayAvatarURL)
.setColor("#f4d442")
.setTitle("<:bustinsilhouette:553086092837126145> Avatar ของผู้ใช้")
.setFooter("ใช้คำสั่งโดย " + message.author.tag)
.setTimestamp()
.setDescription("[Avatar URL link]("+mentionedUser.displayAvatarURL+")");

    message.channel.send(avatarembed)



}

module.exports.help = {
    name: "avatar"
}
