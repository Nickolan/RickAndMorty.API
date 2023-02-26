const axios = require('axios');

const getCharById = (res, ID) => {
    axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
    .then(response => response.data)
    .then(data => { 
        let char = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species
        }
        res.writeHead(200, {'content-type': 'application/json'})
        .end(JSON.stringify(char));
    })
    .catch(err => 
        res
        .writeHead(500, {'Content-Type': 'text/plain'})
        .end('Capo!, No hay un personaje con el id: ' + ID)
        )

    
};

module.exports = getCharById;