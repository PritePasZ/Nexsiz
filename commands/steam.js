const { RichEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { stripIndents } = require("common-tags");
const dateFormat = require("dateformat");

module.exports.run = async (bot, message, args) => {
        const token = "5D55A206F400646275F4396C77D79E2B";
        if(!args[0]) return message.channel.send(":x: โปรดใส่ชื่อผู้ใช้");
        const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${token}&vanityurl=${args.join(" ")}`;

        fetch(url).then(res => res.json()).then(body => {
            if(body.response.success === 42) return message.channel.send("ไม่พบโปรไฟล์ Steam กับชื่อนี้, `https://steamcommunity.com/id/(เอาชื่อจากตรงนี้)`");

                const id = body.response.steamid;
                const summaries = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${token}&steamids=${id}`;
                const bans = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${token}&steamids=${id}`;
                const state = ["Offline", "Online", "Busy", "Away", "Snooze", "Looking to trade", "Looking to play"];

        fetch(summaries).then(res => res.json()).then(body => {
            if(!body.response) return message.channel.send("ไม่พบโปรไฟล์ Steam กับชื่อนี้, `https://steamcommunity.com/id/(เอาชื่อจากตรงนี้)`");
            const { personaname, avatarfull, realname, personastate, loccountrycode, profileurl, timecreated } = body.response.players[0];

        fetch(bans).then(res => res.json()).then(body => {
            if(!body.players) return message.channel.send("ไม่พบโปรไฟล์ Steam กับชื่อนี้, `https://steamcommunity.com/id/(เอาชื่อจากตรงนี้)`");
            const { NumberOfVACBans, NumberOfGameBans} = body.players[0];

            const embed = new RichEmbed()
                .setColor("#003b8b")
                .setAuthor(`บริการของ Steam | ${personaname}`, avatarfull)
                .setThumbnail(avatarfull)
                .setDescription(stripIndents`**:pencil: ชื่อจริง:** ${realname || "ไม่ระบุ"}
                **:bar_chart: สถานะ:** ${state[personastate]}
                **:flag_white: ประเทศ:** :flag_${loccountrycode ? loccountrycode.toLowerCase() : "white"}:
                **:card_index: วันที่บัญชีสร้าง:** ${dateFormat(timecreated * 1000, "d/mm/yyyy (h:MM:ss TT)")}
                **:hammer: Bans:** Vac: ${NumberOfVACBans}, Game: ${NumberOfGameBans}
                **:pushpin: Link:** [ลิงค์โปรไฟล์ คลิก](${profileurl})`)
                .setTimestamp();

                message.channel.send(embed)
            })
        })
    })
}

module.exports.help = {
    name: "steam"
}
