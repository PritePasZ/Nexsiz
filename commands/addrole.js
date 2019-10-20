const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => { 

  let xdemb = new Discord.RichEmbed()
  .setColor("#fa1100")
  .setTitle(`:pencil: Addrole command:`)
  .addField("Usage", ":inbox_tray: n!addrole [user] [role]", true)

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("<:tickNo:576414524014329857> You don't have premmsion Manage Roles!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("<:tickNo:576414524014329857> Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("<:tickNo:576414524014329857> Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.channel.send("<:tickNo:576414524014329857> This user already have that role.");
  await(rMember.addRole(gRole.id));

    await message.channel.send(`:white_check_mask: Gave the ${gRole.name} role to user ${rMember.user.username}!`)

    message.delete();
  
}

module.exports.help = {
  name: "addrole",

}
