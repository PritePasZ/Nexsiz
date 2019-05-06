const Discord = require("discord.js");

  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle(`Removerole command`)
  .addField("Description:", "Take role from member", true)
  .addField("Usage", "!removerole [user] [role]", true)

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You need the `manage members`premission to do that!.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);

  if(!role) return message.channel.send("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send(":x: **Couldn't find that role.**");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("This user doesn't have that role.");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`***I just removed ${rMember.user.username}'s ${gRole.name} role!***`)


}

module.exports.help = {
  name: "removerole"
}
