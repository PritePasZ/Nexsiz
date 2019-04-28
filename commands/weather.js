const Discord = module.require("discord.js")
const weather = require("weather-js")

module.exports.run = async (bot, message, args) => {

    weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
        if(err) message.channel.send(err)


        if(result.length === 0) {
            message.channel.send("**:x: Please enter a valid location**")
            return;
        }


        var current = result[0].current
        var location = result[0].location

        //Sends weather log in embed
        let embed = new Discord.RichEmbed()
           .setDescription(`**${current.skytext}**`)
           .setAuthor(`Weather for ${current.observationpoint}`)
           .setThumbnail(current.imageUrl) 
           .setColor("#f4d142")
           .addField(":alarm_clock: Timezone", `UTC${location.timezone}`, true)
           .addField(":round_pushpin: Degree Type", location.degreetype, true)
           .addField(":thermometer: Temperature", `${current.temperature}`, true)
           .addField("<:thonk:444097943385931777> Feels like", `${current.feelslike} Degrees`, true)
           .addField(":dash: Winds", current.winddisplay, true)
           .addField(":droplet: Humidity", ` ${current.humidity}%`, true)

           message.channel.sendEmbed(embed)

    });

}

module.exports.help = {
    name: "weather"
}
