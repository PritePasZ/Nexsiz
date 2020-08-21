const { RichEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(":x :You dont have permission to perform this command!")

		
	if(isNaN(args[0])) return message.channel.send("โปรดใส่ ID.")
    let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return message.channel.send("โปรดใส่ user id เพื่อการปลดแบน")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(":x: ไม่มี Ban Member Permission")|
    message.delete()
    try {
        message.guild.unban(bannedMember, reason)
        message.channel.send(`${bannedMember.tag} ถูกปลดแบนจากเซิฟแล้ว`)
    } catch(e) {
        console.log(e.message)
    }

    let unbanembed = new RichEmbed()
    .setColor("dc143c")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("การดูแล:", "ปลดแบน")
    .addField("ผู้ถูกปลดแบน:", `${bannedMember.username} (${bannedMember.id})`)
    .addField("ผู้ดูแล:", message.author.username)
    .addField("เหตุผล:", reason)
    .addField("วันที่:", message.createdAt.toLocaleString())
    
        message.channel.send(unbanembed)

}

module.exports.help = {
    name: "unban"
}
