const Discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {

     if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(":x: **You dont have permission to perform this command!**")

     let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send(":x: **Please provide a user to add a role too.**")
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send(":x: **Please provide a role to add to said user.**")
    let reason = args.slice(2).join(" ")

     if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(":x: **I don't have permission to perform this command.**")

     if(rMember.roles.has(role.id)) {
        return message.channel.send(`${rMember.displayName}, **already has the role!**`)

     let addrolembed = new Discord.RichEmbed()
    .setColor("#00c646")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField(":tools: Moderation :", "Addrole")
    .addDescription(`**The role, ${role.name}, has been removed from ${rMember.displayName}.**`)

        message.channel.send(addrolembed);
}

 module.exports.help = {
    name: "addrole"

}
