const http = require('http');
const fs = require('fs')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
});

const request = require('request');
const { brotliDecompress } = require('zlib');

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    'x-rapidapi-key': 'b32fb46034msha8c88159ef8e33ep118f76jsn0d0fef174482',
    useQueryString: true
  },
  form: {q: 'Hello, world!', target: 'fr', source: 'en'}
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

    server.listen(3000, () => {
        console.log('--Uygulama çalıştırıldı...');
        console.log(body)
    });
    
});

