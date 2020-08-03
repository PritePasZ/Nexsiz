const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        // Get a member from mention, id, or username
        let person = getMember(message, args[0]);

        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }

        let love = Math.random() * 100;
        let loveIndex = Math.floor(love / 10);
        let loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        let embed = new RichEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** loves **${message.member.displayName}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);
}

module.exports.help = {
    name: "love"
}
