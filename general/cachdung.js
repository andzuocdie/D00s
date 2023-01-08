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
	.setDescription("**Chắc là không giòn đâu** \n **Hãy dùng bot nghiêm túc không spam - thấy là ban**\n`Anh em dùng .methods để xem phương thức DDOS - .<methods> + <url>`\n`VD : HTTP-FLOOD + <url>`\n `Chúc anh em xài bot vui vẻ`")
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['huongdan'],
  permLevel: 0
}

exports.help = {
  name: 'huongdan',
  description: 'Hoan',
  usage: 'huongdan'
}
