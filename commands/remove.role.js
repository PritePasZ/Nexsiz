const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
let rrembed = new Discord.RichEmbed()
  .setColor("00B2FF")
  .setTitle(`:label: Removerole Command`)
  .addField(":pencil: Description:", "Take role from user", true)
  .addField(":tools: Usage", "!removerole [user] [role]", true)

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: You need the Manage Roles premission to do that.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(rrembed);

  let role = args.join(" ").slice(22);

  if(!role) return message.channel.send(":x: Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send(":x: Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.channel.send(":x: This user doesn't have that role.");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`✅ Removed ${rMember.user.username}'s ${gRole.name} role`)

  message.delete();

}

module.exports.help = {
  name: "removerole"
}
