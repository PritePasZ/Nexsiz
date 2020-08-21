const fetch = require("node-fetch"); 
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports.run = async (client, message, args) => {
    let name = args.join(" ");
    if (!name) return message.channel.send(":x: ไม่พบชื่อช่อง");

    const channel = await fetch.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=${client.config.google}&maxResults=1&type=channel`)
    .catch(() => message.channel.send("Unknown channel error."));

    if (!channel.body.items[0]) return message.channel.send("ไม่เจอผลลัพธ์ของช่อง");

    const data = await fetch.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=${client.config.google}`)
    .catch(() => message.channel.send("Unknown channel data error."));

    const ytembed = new RichEmbed()
    .setColor("0x7289DA")
    .setThumbnail(channel.body.items[0].snippet.thumbnails.high.url)
    .setAuthor(`ช่อง Youtube `, `https://cdn.discordapp.com/attachments/553086289927340032/746407177714925748/pNcSrT2wrRKEQoH33ZandMlc2wyGoHWxriuWrSB9XMQsIV5zHDLhUJi-KfiPl6HA9DsfPR4rxLGo5OncAZf6lL9cD6frni4HkbTm.png`)
    .setTimestamp(new Date())
    .setDescription(stripIndents`ช่อง Youtube
    **:card_index: ชื่อช่อง:** ${channel.body.items[0].snippet.channelTitle}
    **:pencil: คำอธิบายช่อง:** ${channel.body.items[0].snippet.description}
    **:trophy: ผู้ติดตาม:** ${parseInt(data.body.items[0].statistics.subscriberCount).toLocaleString()}
    **:camera: วิดีโอทั้งหมด** ${parseInt(data.body.items[0].statistics.viewCount).toLocaleString()}
    **:bar_chart: ยอดวิวที่งหมด:** ${parseInt(data.body.items[0].statistics.viewCount).toLocaleString()}
    **:date: วันที่สร้าง:** ${new Date(channel.body.items[0].snippet.publishedAt).toDateString()}
    **:pushpin: ลิงค์ช่อง**: ${channel.body.items[0].snippet.channelTitle}](https://www.youtube.com/channel/${channel.body.items[0].id.channelId}`)

    message.channel.send(ytembed);
}

module.exports.help = {
    name: "youtube"

}

