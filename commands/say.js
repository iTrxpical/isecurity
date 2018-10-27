const Discord = require('discord.js')

exports.run = (args, client, Util, prefix, msg, staff) => {
  
    if (!staff.sm) return;
    msg.delete().catch();
    let botmessage = args.join(" ");
    msg.channel.send(botmessage);
}