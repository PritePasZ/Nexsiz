module.exports.run = async (bot, message, args) => {
    let users = bot.users;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send(":x: **Please type a term to search!**").then(msg => {msg.delete(5000)});

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    let finduserembed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setColor("#f44242")
    .setDescription(matches.map(u => u.tag));




     }
    
        module.exports.help = {
            name: "finduser"
        }
