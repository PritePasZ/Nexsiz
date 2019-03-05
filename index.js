const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  
  if(err) console.log(err);
  
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
  
}); 


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`with PritePasZ | --help`);
});

/*bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === '👋welcome👋');
  if (!channel) return;
  let welcomeembed = new Discord.RichEmbed()
  .setAuthor(member.user.username, member.user.displayAvatarURL)
  .setThumbnail(member.user.displayAvatarURL)
  .setTimestamp()
  .addField(`<:addMember:518733392402186240> Welcome to the server, **${member.user.tag}**`, `<a:cooldoge:511180988601073665> Thanks for joining with us, ${member}`)
  .setColor(`#409cd9`)
  channel.send(welcomeembed);
});


bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find(ch => ch.name === '👋welcome👋');
  if (!channel) return;
  let goodbyeembed = new Discord.RichEmbed()
  .setAuthor(member.user.username, member.user.displayAvatarURL)
  .setTimestamp()
  .addField(`<:remMember:518733397783347200> Goodbye, **${member.user.tag}**`, `<a:wave:512259019386126337> We hope to see you again, ${member}`)
  .setColor(`#ff3320`)
  channel.send(goodbyeembed);
});*/

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '--';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if(cmd === "${prefix}serverinfo"){
    
    let sicon = message.guild.displayAvatarURL;
    let serverrembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#c92626")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members":, message.guild.memberCount); 
              
    return message.channel.send(severembed);
  }
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args)
 
});

bot.login(process.env.token);
