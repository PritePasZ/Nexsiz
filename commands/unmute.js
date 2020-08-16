module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("<:tickNo:576414524014329857> You don't have the Manage Messages premission")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("<:tickNo:576414524014329857> โปรดแท็กผู้ใช้ หรือใส่ ID ผู้ใช้เพื่อปลด mute");

        let role = message.guild.roles.find(r => r.name === "Mute Role")
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("<:tickNo:576414524014329857> ผู้ใช้นี้ยังไม่ถูก mute ไว้");

        await toMute.removeRole(role);
        message.channel.sendMessage("ผู้ใช้นี้ถูกปลด mute แล้ว :pencil:");


     }
    
        module.exports.help = {
            name: "unmute"
        }
