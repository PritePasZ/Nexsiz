const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...").then(msg => {msg.delete(1000)});

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("#f4d442")
        .setTitle("<:bustinsilhouette:553086092837126145> Here is the Avatar")
        .setFooter("Searched by " + message.author.tag)
        .setTimestamp()
        .setDescription("[Avatar URL link]("+mentionedUser.displayAvatarURL+")");

        message.channel.send(embed)



}

module.exports.help = {
    name: "avatar"
}
