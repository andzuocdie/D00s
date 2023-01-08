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
	.setTitle('🚀 **Hoan** 🚀')
	.setDescription("**ADMIN** \n`Tên : Nguyễn Nhật Bảo An` \n`Năm sinh : 200X` \n`Sở thích : Thích xem anime, nghe nhạc, ...`\n `Contacts : nghoanxg206@gmail.com` \n `Zalo : 0966.925.274`\n `Facebook : https://www.facebook.com/GIAHANxNOTDIE/`\n ** Developer : Hoan **")
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['admin'],
  permLevel: 0
}

exports.help = {
  name: 'admin',
  description: 'Hoan',
  usage: 'admin'
}
