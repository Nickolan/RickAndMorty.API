const http = require('http')
const character = require ('./utils/data')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.url.includes('rickandmorty/character')) {
        let id = req.url.split('/').at(-1);    // funciona como (length - 1);
        let characterFilter = character.filter((char) => char.id === Number(id));

        res.writeHead(200, {'content-type': 'application/json'}).end(JSON.stringify(characterFilter))

        /*
        const splited = req.url.split('/');
        const id = splited[splited.length - 1]
        let response;
        data.forEach(element => {
            if(element.id = id){
                response = element;
            }
        });
        res.end(JSON.stringify(response))
        */
    }
}).listen(3001, 'localhost');