const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let version = `0.2.6a`;
    let bicon = bot.user.displayAvatarURL;
    let bname = bot.user.username;
    let botembed = new Discord.RichEmbed()
    .setColor(`#f4d442`)
    .setThumbnail(bicon)
    .setAuthor(bname, bicon)
    .setURL(`https://discord.gg/mjypjna`)
    .setTimestamp()
    .setTitle(`คลิกต้องนี้เพื่อเข้าเซิฟเวอร์ดิสคอร์ต`)
    .setDescription("สร้างโดยใช้ <:nodejs:553212483415048221> Node.js และ <:discordjs:553213251488317440> Discord.js\nHost บอทได้ฟรีโดย <:heroku:553414334156374016> Heroku")
    .addField(`:clipboard: สร้างโดย`, `PriteToKung#3071`, true)
    .addField(`:information_source: เวอร์ชัน`, `${version}`, true)
    .addField(`:tools: Debug`, `อัพเดทเวอร์ชันใหม่ ${version}, คำสั่งใหม่ - ปรับ Language ทุกอย่างให้เป็นภาษาไทย\n เพิ่ม Bangyat เข้าดิสคอร์ตเซิฟเวอร์ "b!invite"\nพิมพ์ "b!help" ในแชทเพื่อดูคำสั่งทั้งหมด`)
    .addField(`:robot: วันที่บอทสร้างขี้น`, bot.user.createdAt)
    .setTimestamp();

    message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
