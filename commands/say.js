const Discord = require('discord.js')

exports.run = (args, client, Util, prefix, msg, tmods, mods, sm, owner) => {
  
    if (!sm) return;
    msg.delete().catch();
    let botmessage = args.join(" ");
    msg.channel.send(botmessage);
}