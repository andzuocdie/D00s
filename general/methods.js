const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **PANEL** 🚀')
	.setDescription("**LAYER 7** \n `HOAN` \n `HOAN-V2` \n `HTTP-HEN` \n `HTTP-V2` \n `HTTP-GET` \n `CFB-V1` \n `CF-TLS` \n `CF-UAM` \n `TLS-STRONG` \n `HTTP-FLOOD` \n `HTTP-BY` \n `HTTP-VIP` \n `HTTP-RAW` \n `HTTP-RAND` \n `HTTPS-GO` \n `HTTP-GO` \n `HTTP-LORD` \n `HTTP-STORM` \n**LAYER 4** \n `TCP-KILL` \n `UDP-KILL` \n **Sẽ sớm update thêm Methods**")
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['methods'],
  permLevel: 0
}

exports.help = {
  name: 'methods',
  description: 'Hoan',
  usage: 'methods'
}
