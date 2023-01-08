const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;
if (message.channel.id != room) {
	return;
  }
var exec = require('child_process').exec
exec(`pkill 'go'`, (error, stdout, stderr) => {
});
console.log('Dừng lại tất cả cuộc tấn công:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **LOLI VER 1.0** 🔥')
	.setTimestamp()
	.setDescription("**► STOP ALL ATTACK DỪNG LẠI CÓ FBI BẮT BÂY GIỜ 💥**")
	.setFooter('© Developer: Hoan#9058', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['endall'],
  permLevel: 0
}

exports.help = {
  name: 'endall',
  description: 'HOAN',
  usage: 'endall'
}