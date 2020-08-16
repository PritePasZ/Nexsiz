const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(":x: You dont have permission to perform this command!")

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send(":x: Please provide a user to add a role too.")
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send(":x: Please provide a role to add to said user.")  

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(":x: I don't have permission to perform this command.")

    if(rMember.roles.has(role.id)) {
        return message.channel.send(`:x: ${rMember.displayName}, already has the role!`)
    } else {
        await rMember.addRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`:white_check_mark: ${role.name} role, has been added to ${rMember.displayName}.`)
    }

    let addroleembed = new RichEmbed()
    .setColor("#00ff00")
    .setAuthor(`${message.guild.name} Moderator Logs`, message.guild.iconURL)
    .addField(":pencil: Moderation:", "Addrole")
    .addField(":mute: Mute:", rMember.user.username)
    .addField(":tools: Moderator:", message.author.username)
    .addField(":date: Date:", message.createdAt.toLocaleString())
    

        message.channel.send(addroleembed)
}       

module.exports.help = {
    name: "addrole"

}