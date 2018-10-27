const Discord = require('discord.js')

exports.run = (args, client, Util, prefix, msg, staff) => {

  var useridm = msg.author.id;
  
    //if (staff.owner.includes(userid)) {

        var user = msg.mentions.members.first();
        var userid = user.id;
      
        if (staff.mods.includes(userid)) {
            const embed = new Discord.RichEmbed()

                .setTitle(":warning: Error")
                .setDescription(user + " is already an official iSecurity moderator!")
                .setColor(`#ff0000`)
            msg.channel.send(embed)
                .then(message => {
                    message.delete(120000)
                })
        } else {

          staff.mods.push(userid)
          return msg.channel.send(`done`);
        }
    //} else {
//console.log(`1`)
    //}
}