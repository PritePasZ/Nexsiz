const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const API = require("apextab-api"), ApexTab  = API.Apextab_API;

module.exports.run = async (bot, message, args) => {
        if(!args[0]) return message.channel.send("โปรดใส่ชื่อ");
        if(!args[1]) return message.channel.send("โปรดใส่ platform `pc`, `xbox` or `ps4`");

        const platformCheck = { pc: API.Platform.PC, xbox: API.Platform.XBOX_ONE, ps4: API.Platform.PS4 };
        const platform = platformCheck[args[1].toLowerCase()];

        try {
            const results = await ApexTab.searchPlayer(args[0], platform ? platform : API.Platform.PC)
            
                for (let playerResult of results.results) {
                    const player = await ApexTab.getPlayerById(playerResult.aid)
                    const { name, skillratio, visits, avatar, legend, level, kills, headshots, matches, globalrank, utime } = player;

                        const apexembed = new RichEmbed()
                            .setColor("#d90000")
                            .setAuthor(`Origin (Apex Legends) | ${name}`, avatar)
                            .setThumbnail(avatar)
                            .setDescription(stripIndents`
                                **:trophy: Active Legend:** ${legend || "Not Found."}
                                **:military_medal: แรงค์:** ${globalrank || "Not Ranked."}
                                **:bar_chart: เลเวล:** ${level || 0}
                                **:dart: อัตราสกิล:** ${skillratio || "0%"}
                                **:military_medal: รอบในการเล่น:** ${matches || 0}
                                **:skull: ฆ่าs:** ${kills || 0}
                                **:dart: ยิงหัว:** ${headshots || 0}
                                **:inbox_tray: เยี่ยมชม:** ${visits || 0}
                                **:alarm_clock: เวลาในการเล่นทั้งหมด:** ${Math.ceil(utime / (1000 * 60 * 60 * 24)) || 0} days
                            `)
                            .setTimestamp()

                        message.channel.send(apexembed)
                }
        } catch(err) {
            return message.channel.send(":x: ไม่พบชื่อ player นี้")
    }

}

module.exports.help = {
    name: "apex"
}
