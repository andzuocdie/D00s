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
	.setTitle('🚀 **Quản Trị Viên** 🚀')
	.setDescription("**Nguyen Hoang Huy ( Sokii )** \n`Công việc : Quản Lí Sever` \n`Link Facebook : https://www.facebook.com/nguyenhoanghuyreal`\n **Hoang Thanh Tung ( 𝐓𝐡𝐚𝐧𝐡 𝐓𝐮𝐧𝐠 )** \n `Công việc : Quản Lí Thành Viên`\n `Link Facebook : https://www.facebook.com/ThanhTung.User`\n ** Developer : Hoan **")
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['listquanli'],
  permLevel: 0
}

exports.help = {
  name: 'listquanli',
  description: 'Hoan',
  usage: 'listquanli'
}
