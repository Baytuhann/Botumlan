const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new  Discord.RichEmbed()
        .setDescription("**SUNUCU İCONU**")
        .setImage(message.guild.iconURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'servericon', 
  description: 'serverin İconunu gösterir',
  usage: 'servericon' 
};
