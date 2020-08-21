exports.run = function (bot, msg, args) {
    if (args.length < 1) {
        throw 'ใส่ข้อความเพื่อ reversed!';
    }
    msg.reply(args.join(' ').split('').reverse().join(''));


}

module.exports.help = {
  name: "reverse"
}
