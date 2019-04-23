const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setImage(mentionedUser.displayAvatarURL)
        .setColor("#f4d442")
        .setTitle("<:bustinsilhouette:553086092837126145> Here the Avatar")
        .setFooter("Searched by " + message.author.tag)
        .setTimeStamp()
        .setDescription("[Avatar URL link]("+mentionedUser.displayAvatarURL+")");

        message.channel.send(embed)


    msg.delete();
}

module.exports.help = {
    name: "avatar"
}
