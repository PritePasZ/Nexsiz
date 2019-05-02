const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
    // Lets define our array of guilds
    const guildArray = bot.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })

    // And send it
let guildembed = new Discord.RichEmbed()
    .setColor("#00c646")
    .setAuthor(`${user.username}`, user.avatarURL)
    .addField("Guilds List", `\`\`\`${guildArray.join("\n")}\`\`\``, true)

    message.channel.send(guildembed)
    
}

module.exports.help = {
    name: "guilds"
}
