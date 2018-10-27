const Discord = require('discord.js')

exports.run = (args, client, Util, prefix, msg, tmods, mods, sm, owner) => {

    if (owner.includes(userid)) {

        var user = msg.author.metions.first();
        var userid = user.id;

      console.log(userid)
      
        if (mods.includes(userid)) {
            const embed = new Discord.RichEmbed()

                .setTitle(":warning: Error")
                .setDescription(user + " is already an official iSecurity moderator!")
                .setColor(`#ff0000`)
            msg.channel.send(embed)
                .then(message => {
                    message.delete(120000)
                })
        } else {

          return mods.push(userid);

        }
    } else {
console.log(`1`)
    }
}