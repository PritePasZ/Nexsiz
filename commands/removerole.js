const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("ไม่มี Manage Roles Permission")

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send("Please provide a user to remove a role too.")
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("Please provide a role to remove from said user.") 

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("บอทไม่ยศที่จะใช้คำสั่งนี้ได้")

    if(!rMember.roles.has(role.id)) {
        return message.channel.send(`${rMember.displayName}, ไม่มี role นี้`)
    } else {
        await rMember.removeRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`:white_check_mark: ${role.name}, ถูกลบออกจาก ${rMember.displayName}. แล้ว`);
    }
    
} 

module.exports.help = {
    name: "removerole"

}
