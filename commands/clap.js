const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = (bot, message, args) => {
    if (args.length < 1) return message.channel.send("**<:tickNo:576414524014329857> โปรดใส่เว้นวรรคระหว่างข้อความ**").then(msg => {msg.delete(5000)});
    if(!args[1]) return message.reply("<:tickNo:576414524014329857> **โปรดใส่ข้อความให้มากกว่า 1 คำ**");
    
    message.channel.send(args.map(randomizeCase).join(':clap:'));

}

module.exports.help = {
    name: "clap"
}
