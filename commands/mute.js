const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!mute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("<:tickNo:576414524014329857> โปรดแท็กผู้ใช้เพื่อ mute");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:tickNo:576414524014329857> ไม่สามารถใช้ได้เพราะไม่มี Permission");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I cant mute this user");
  if (tomute.id === message.author.id) return message.channel.send("<:tickNo:576414524014329857> ไม่สามารถ mute ตนเองได้");
  let muterole = message.guild.roles.find(`name`, "Mute Role");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mute Role",
        color: "#ff0000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.channel.send("<:tickNo:576414524014329857> ไม่ได้ระบุเวลา");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> ผู้ใช้ถูก mute ด้วยเวลา ${ms(ms(mutetime))} :mute:`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> ผู้ใช้ถูก mute แล้ว :pencil:`);
  }, ms(mutetime));

  message.delete();

}

module.exports.help = {
  name: "mute"
}
