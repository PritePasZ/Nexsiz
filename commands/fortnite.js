const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fortnite = require("simple-fortnite-api"), client = new fortnite("ad506295-e61a-4302-afe7-a0645c7bbfc6");

module.exports.run = async (bot, message, args) => {
        if(!args[0]) return message.channel.send(":x: โปรดใส่ชื่อ");
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
                    .setDescription(stripIndents`**:video_game: เกมโหมด:** ${gametype.slice(0, 1).toUpperCase() + gametype.slice(1)}
                    **:skull: ฆ่า:** ${kills || 0}
                    **:clipboard: คะแนน:** ${score || 0}
                    **:alarm_clock: คะแนนต่อนาที:** ${scorePerMin || 0}
                    **:tada: ชนะ:** ${wins || 0}
                    **:pencil: อัตราชนะ:** ${winPercent || "0%"}
                    **:bar_chart: อัตรา ฆ่า/ตาย:** ${kd || 0}
                    **:crossed_swords: รอบเล่นทั้งหมด:** ${matches || 0}
                    **:pushpin: Link:** [ลิงค์โปรไฟล์ คลิก](${url})`)
                    .setTimestamp()

                    message.channel.send(fortniteembed)
}

module.exports.help = {
    name: "fortnite"
}
