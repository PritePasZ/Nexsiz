const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
    // Lets define our array of guilds
    const guildArray = bot.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })

    // And send it
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)

}

module.exports.help = {
    name: "guilds"
}
