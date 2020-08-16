const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const overwatch = require("overwatch-api");

module.exports.run = async (bot, message, args) => {
        if(!args[0]) return message.channel.send("โปรดใส่ชื่อผู้เล่น");
        if(!args[1] || (args[1] && !["pc", "xbl", "psn"].includes(args[1]))) return message.channel.send("โปรดใส่ platform `pc`, `xbox` or `psn`");
        if(args[0].includes("#")) args[0] = args[0].replace(/#/g, "-");

            overwatch.getProfile(args[1], "global", args[0], (err, json) => {
                if (err) return message.channel.send("ไม่พบผู้เล่นด้วยชื่อนี้");
                const { games, level, portrait, username, playtime: { competitive, quickplay }, private } = json;
                const { sportsmanship, shotcaller, teammate } = json.endorsement;
                const { won, draw, played, lost, win_rate } = json.games.competitive;

                if(private) return message.channel.send("ผู้เล่นนี้ตั้ง stats แบบส่วนตัวคนอื่นไม่สามารถเห็นได้");
                        
                    const embed = new RichEmbed()
                        .setColor("#FFFF00")
                        .setAuthor(`Blizzard (Overwatch) | ${username}`, portrait)
                        .setThumbnail(portrait)
                        .addField("โหมด General:", stripIndents`
                        **:bar_chart: เลเวล:** ${level || 0}
                        **:desktop: Sportsmanship:** ${sportsmanship.rate || 0} / 100
                        **:dart: Shotcaller:** ${shotcaller.rate || 0} / 100
                        **เพื่อนร่วมทีม:** ${teammate.rate  || 0} / 100
                        `)
                        .addField("โหมด Competitive:", stripIndents`
                        **:bar_chart: การเล่น:** ${played || 0}
                        **:trophy: ชนะ:** ${won || 0}
                        **เสมอ:** ${draw || 0}
                        **:flag_white: แพ้:** ${lost || 0}
                        **:clipboard: อัตราชนะ:** ${win_rate || 0}
                        **:timer: วันเล่นทั้งหทด:** ${competitive || 0}
                        `, true)
                        .addField("โหมด QuickPlay:", stripIndents`
                        **:bar_chart: การเล่น:** ${games.quickplay.played || "N/A"}
                        **:trophy: ชนะ:** ${games.quickplay.won || 0}
                        **:timer: วันเล่นทั้งหมด:** ${quickplay || 0}
                        `, true)
                        .setTimestamp();

                    message.channel.send(embed);
                            
                })
      }

}

module.exports.help = {
  name: "overwatch"

}
