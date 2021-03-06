const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { rainbow: { email, password } } = require("../botconfig.json");
const R6API = require("r6api.js");
const { getId, getLevel, getRank, getStats } = new R6API(email, password);

module.exports.run = async (bot, message, args) => {
        const platforms = { pc: "UPLAY", xbox: "XBL", ps4: "PSN" };
		const regions = { eu: "emea", na: "ncsa", as: "apac" };

		let player, platform, region;

		if (!args[0]) return message.reply(":x: โปรดใส่ชื่อผู้เล่น");
		else player = args[0];

		args[1] && [ "pc", "xbox", "ps4" ].includes(args[1].toLowerCase()) ? platform = platforms[args[1].toLowerCase()] : platform = platforms["pc"];
        args[2] && [ "eu", "na", "as" ].includes(args[2].toLowerCase()) ? region = regions[args[2].toLowerCase()] : region = regions["eu"];

		if (platform === "XBL") player = player.replace("_", " ");

		player = await getId(platform, player);
		if (!player.length) return message.reply(":x: ไม่พบผู้เล่นนี้");
		player = player[0];

		const playerRank = await getRank(platform, player.id);
		const playerStats = await getStats(platform, player.id);
		const playerGame = await getLevel(platform, player.id);

		if (!playerRank.length || !playerStats.length || !playerGame.length) return message.channel.send("ไม่พบข้อมูลผู้เล่น");

		const { current, max, lastMatch } = playerRank[0].seasons[Object.keys(playerRank[0].seasons)[0]].regions[ region ];
		const { pvp, pve } = playerStats[0];
		const { level, xp } = playerGame[0];

		platform = Object.keys(platforms).find((key) => platforms[key] === platform).toUpperCase();
		region = Object.keys(regions).find((key) => regions[key] === region).toUpperCase();

            const r6embed = new RichEmbed()
                .setColor("#D3D3D3")
                .setAuthor(player.username, bot.user.displayAvatarURL)
                .setDescription(`Stats for the **${region}** region on ${platform}.`)
                .setThumbnail(current.image)
                .addField("General:", stripIndents`
                    **:bar_chart: เลเวล:** ${level} (${xp} xp)
                    **:military_medal: แรงค์:** ${current.name} (Max: ${max.name})
                    **:pencil: MMR:** ${current.mmr}
                `)
                .addField("Statistics:", stripIndents`
                    **:trophy: ชนะ:** ${pvp.general.wins} 
                    **:flag_white: แพ้:** ${pvp.general.losses}
                    **:clipboard: อัตรา ชนะ/แพ้:** ${(pvp.general.wins /  pvp.general.matches * 100).toFixed(2)}%
                    **:skull: ฆ่า:** ${pvp.general.kills}
                    **:drop_of_blood: ตาย:** ${pvp.general.deaths}
                    **:crossed_swords: อัตรา ฆ่า/ตาย:** ${(pvp.general.kills / pvp.general.deaths).toFixed(2)}
                    **:timer: วันเล่นทั้งหมด:** ${Math.round(pvp.general.playtime / 3600)} hours
                `)
                .addField("โหมด Terroist Hunt:", stripIndents`
                    **:trophy: ชนะ:** ${pve.general.wins} 
                    **:flag_white: แพ้:** ${pve.general.losses}
                    **:clipboard: อัตรา ชนะ/แพ้:** ${(pve.general.wins / pve.general.matches * 100).toFixed(2)}%
                    **:skull:ฆ่า:** ${pve.general.kills} 
                    **:drop_of_blood: แพ้:** ${pve.general.deaths}
                    **:crossed_swords:อัตรา ฆ่า/ตาย:** ${(pve.general.kills / pve.general.deaths).toFixed(2)}
                    **:timer: วันเล่นทั้งหมด:** ${Math.round(pve.general.playtime / 3600)} hours
                `)
                .setTimestamp()
                .setFooter(bot.user.username);

            message.channel.send(r6embed).catch((e) => message.channel.send(`:x: มีข้อผิดพลาด: ${e.message}`));
}

module.exports.help = {
    name: "r6"
}
