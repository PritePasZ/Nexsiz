const Discord = require("discord.js");
const promptMessage = require("../../functions.js");

let chooseArr = ["🗻", "📰", "✂"];

module.exports.run = async (bot, message, args) => {

      let embed = new Discord.RichEmbed()
          .setColor("#ffffff")
          .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
          .setDescription("Add a reaction to one of these emojis to play the game!")
          .setTimestamp();

      let m = await message.channel.send(embed);
      let reacted = await promptMessage(m, message.author, 30, chooseArr);

      let botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

      let result = await getResult(reacted, botChoice);
      await m.clearReactions();

      embed
          .setDescription("")
          .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
          if ((me === "🗻" && clientChosen === "✂") ||
              (me === "📰" && clientChosen === "🗻") ||
              (me === "✂" && clientChosen === "📰")) {
                  return ":tada: You won!";
          } else if (me === clientChosen) {
              return "It's a tie!";
          } else {
              return "You lost!";
       }
   }
}

module.export.run = {
  name:rps

}
