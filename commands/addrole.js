const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("You dont have permission to perform this command!")

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send("Please provide a user to add a role too.")
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("Please provide a role to add to said user.")  

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to perform this command.")

    if(rMember.roles.has(role.id)) {
        return message.channel.send(`${rMember.displayName}, already has the role!`)
    } else {
        await rMember.addRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`:white_check_mark: ${role.name} role, has been added to ${rMember.displayName}.`)
    }

    let addroleembed = new RichEmbed()
    .setColor("#00ff00")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "Addrole")
    .addField("Mutee:", rMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.find(c => c.name === "tut-modlogs")
        sChannel.send(addroleembed)
}       

module.exports.help = {
    name: "addrole"

}