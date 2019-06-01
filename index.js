const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("./botconfig.json");
const client = new Discord.Client();
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
  console.log(`${bot.user.username} is loaded and online on ${bot.guilds.size} server!`);
  bot.user.setActivity(`with PritePasZ | n!help`);
});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === '👋คนเข้า-ออก👋');
  if (!channel) return;
  let welcomeembed = new Discord.RichEmbed()
  .setAuthor(member.user.username, member.user.displayAvatarURL)
  .setThumbnail(member.user.displayAvatarURL)
  .setTimestamp()
  .addField(`<:plus:557903316496154645> Welcome to the server, **${member.user.tag}**`, `<:plus_1:557908827840970773> Thanks for joining with us, ${member}`)
  .setColor(`#409cd9`)
  channel.send(welcomeembed);
});
bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find(ch => ch.name === '👋คนเข้า-ออก👋');
  if (!channel) return;
  let goodbyeembed = new Discord.RichEmbed()
  .setAuthor(member.user.username, member.user.displayAvatarURL)
  .setTimestamp()
  .addField(`<:subtract:557905417406119956> Goodbye, **${member.user.tag}**`, `:wave: We hope to see you again, ${member}`)
  .setColor(`#ff3320`)
  channel.send(goodbyeembed);
});
bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = 'n!';
  if (!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(process.env.DiscordBot);
