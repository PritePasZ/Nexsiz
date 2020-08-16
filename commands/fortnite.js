const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fortnite = require("simple-fortnite-api"), client = new fortnite("ad506295-e61a-4302-afe7-a0645c7bbfc6");

module.exports.run = async (bot, message, args) => {
        if(!args[0]) return message.channel.send(":x: Please supply a username.");
        if(args[1] && !["lifetime", "solo", "duo", "squad"].includes(args[1])) return message.channel.send("Usage: `n!fortnite <ชื่อ> <โหมดของเกม>`\nGameTypes: Lifetime, Solo, Duo, Squad");
        let gametype = args[1] ? args[1].toLowerCase() : "lifetime";

        let data = await client.find(args[0])
        if(data && data.code === 404) return message.channel.send(":x: ไม่พบชื่อผู้ใช้นี้")
            const { image, url, username } = data;
            const { scorePerMin, winPercent, kills, score, wins, kd, matches } = data[gametype]

                const fortniteembed = new RichEmbed()
                    .setColor("#0080ff")
                    .setAuthor(`Epic Games (Fortnite) | ${username}`, image)
                    .setThumbnail(image)
                    .setDescription(stripIndents`**:video_game: Gamemode:** ${gametype.slice(0, 1).toUpperCase() + gametype.slice(1)}
                    **:skull: Kills:** ${kills || 0}
                    **:clipboard: Score:** ${score || 0}
                    **:alarm_clock: Score Per Min:** ${scorePerMin || 0}
                    **:tada: Wins:** ${wins || 0}
                    **:pencil: Win Ratio:** ${winPercent || "0%"}
                    **:bar_chart: Kill/Death Ratio:** ${kd || 0}
                    **:crossed_swords: Matches Played:** ${matches || 0}
                    **:pushpin: Link:** [link to profile](${url})`)
                    .setTimestamp()

                    message.channel.send(fortniteembed)
}

module.exports.help = {
    name: "fortnite"
}