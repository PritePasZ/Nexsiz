const fetch = require("node-superfetch");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let name = args.join(" ");
    if (!name) return message.channel.send(":x: ไม่พบช่องนี้");

    const channel = await fetch.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=${client.config.google}&maxResults=1&type=channel`)
    .catch(() => message.channel.send(":x: เกิดข้อผิดพลาดของช่อง"));

    if (!channel.body.items[0]) return message.channel.send(":x: ไม่มีผลลัพธ์ของช่อง");

    const data = await fetch.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=${client.config.google}`)
    .catch(() => message.channel.send(":x: ไม่พบข้อทูลของช่อง"));

    const ytembed = new Discord.RichEmbed()
    .setColor("0x7289DA")
    .setThumbnail(channel.body.items[0].snippet.thumbnails.high.url)
    .setTimestamp(new Date())
    .addField(":card_index: ชื่อช่อง", channel.body.items[0].snippet.channelTitle, true)
    .addField(":pencil: คำอธิบายช่อง", channel.body.items[0].snippet.description, true)
    .addField(":trophy: ผู้ติดตาม", parseInt(data.body.items[0].statistics.subscriberCount).toLocaleString(), true)
    .addField(":bar_chart: ยอดวิวทั้งหมด", parseInt(data.body.items[0].statistics.viewCount).toLocaleString(), true)
    .addField(":camera: วิดีโอทั้งหมด", parseInt(data.body.items[0].statistics.videoCount).toLocaleString(), true)
    .addField(":date: วันที่สร้างช่อง", new Date(channel.body.items[0].snippet.publishedAt).toDateString(), true)
    .addField(":pushpin: ลิงค์", `[${channel.body.items[0].snippet.channelTitle}](https://www.youtube.com/channel/${channel.body.items[0].id.channelId})`, true)
    
    return message.channel.send(ytembed);
}

module.exports.help = {
    name: "youtube"
}
