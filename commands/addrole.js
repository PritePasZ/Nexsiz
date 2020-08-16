const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(":x: คุณไม่มี Manage Role")

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send(":x: โปรดใส่ผู้ใช่เพื่อเพิ่ม role")
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send(":x: โปรดใส่ @(role) เพื่อเพื่ม role")  

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(":x: ใช้คำสั่งไม่ได้เพราะไม่มี Permisssion")

    if(rMember.roles.has(role.id)) {
        return message.channel.send(`:x: ${rMember.displayName}, already has the role!`)
    } else {
        await rMember.addRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`:white_check_mark: ${role.name} ได้เพื่มให้ ${rMember.displayName} แล้ว`)
    }
}   

module.exports.help = {
    name: "addrole"

}