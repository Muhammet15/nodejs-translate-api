const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.write('Merhaba Dünya!');
    res.end();
});
const { Translate } = require('@google-cloud/translate').v2;
server.listen(3000, () => {

    const translate = new Translate();

    async function translateText() {
        text = "hi hello"
        target = 'tr'
        let [translations] = await translate.translate(text, target);
        translations = Array.isArray(translations) ? translations : [translations];
        console.log('Translations:');
        translations.forEach((translation, i) => {
            console.log(`${text[i]} => (${target}) ${translation}`);
        });
    }

    translateText();
    console.log(translateText())
    console.log('--Uygulama çalıştırıldı...');
});

