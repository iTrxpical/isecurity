const Discord = require('discord.js')

exports.run = (args, client, Util, prefix, msg, staff) => {

    var user = msg.author;
    var userid = msg.author.id;

    const embed2 = new Discord.RichEmbed()

        .setTitle(":white_check_mark: Official Moderator")
        .setDescription(user + " is an official iSecurity moderator!")
        .setColor(`#008000`)

    const embed = new Discord.RichEmbed()

        .setTitle(":warning: Not-Official Moderator")
        .setDescription(user + " is not an official iSecurity moderator!")
        .setColor(`#ff0000`)

    if (staff.mods.includes(userid)) {
        msg.channel.send(embed2)
            .then(message => {
                message.delete(120000)
            })
    } else {
        msg.channel.send(embed)
            .then(message => {
                message.delete(120000)
            })
    }

}

