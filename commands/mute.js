const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!mute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("<:tickNo:576414524014329857> Please tag user to mute!");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:tickNo:576414524014329857> Sorry, you don't have permissions to use this!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I cant mute this user");
  if (tomute.id === message.author.id) return message.channel.send("<:tickNo:576414524014329857> You cannot mute yourself!");
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
  if(!mutetime) return message.channel.send("<:tickNo:576414524014329857> You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))} :mute:`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted! :pencil:`);
  }, ms(mutetime));

  message.delete();

}

module.exports.help = {
  name: "mute"
}
