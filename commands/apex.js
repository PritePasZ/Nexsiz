const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const API = require("apextab-api"), ApexTab  = API.Apextab_API;

module.exports = {
    config: {
        name: "apex",
        description: "Displays a user's apex stats!",
        usage: "<user> <platform>",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["apec"] 
    }, 
    run: async (bot, message, args) => {
        if(!args[0]) return message.channel.send("Please supply a username.");
        if(!args[1]) return message.channel.send("Please supply a platform to check. `pc`, `xbox` or `ps4`");

        const platformCheck = { pc: API.Platform.PC, xbox: API.Platform.XBOX_ONE, ps4: API.Platform.PS4 };
        const platform = platformCheck[args[1].toLowerCase()];

        try {
            const results = await ApexTab.searchPlayer(args[0], platform ? platform : API.Platform.PC)
            
                for (let playerResult of results.results) {
                    const player = await ApexTab.getPlayerById(playerResult.aid)
                    const { name, skillratio, visits, avatar, legend, level, kills, headshots, matches, globalrank, utime } = player;

                        const embed = new RichEmbed()
                            .setColor("#d90000")
                            .setAuthor(`Origin (Apex Legends) | ${name}`, avatar)
                            .setThumbnail(avatar)
                            .setDescription(stripIndents`
                                **:trophy: Active Legend:** ${legend || "Not Found."}
                                **:military_medal: Global Rank:** ${globalrank || "Not Ranked."}
                                **:bar_chart: Level:** ${level || 0}
                                **:dart: Skill Ratio:** ${skillratio || "0%"}
                                **:military_medal: Matches:** ${matches || 0}
                                **:skull: Kills:** ${kills || 0}
                                **Headshots:** ${headshots || 0}
                                **:inbox_tray: Visits:** ${visits || 0}
                                **:alarm_clock: PlayTime:** ${Math.ceil(utime / (1000 * 60 * 60 * 24)) || 0} days
                            `)
                            .setTimestamp()

                        message.channel.send(embed)
                }
        } catch(err) {
            return message.channel.send(":x: Can't find a player by that")
        }
    }
}