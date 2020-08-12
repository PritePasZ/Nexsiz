const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("./botconfig.json");
const client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: true});
const { config } = require("dotenv");
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

// update here
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online, Bot is ready and working in ${bot.guilds.size} servers with ${bot.users.size} users!`);
  bot.user.setActivity(`with PriteToKung | n!help`, { type: 'WATCHING' })
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
