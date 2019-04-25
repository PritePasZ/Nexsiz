exports.run = function (bot, msg, args) {
    if (args.length < 1) {
        throw 'You must input text to be reversed!'.then(msg => {msg.delete(5000)});
    }
    msg.reply(args.join(' ').split('').reverse().join(''));


}

module.exports.help = {
  name: "reverse"
}
