const axios = require('axios');

const getCharDetail = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        let char = {
            image: data.image,
            name: data.name,
            gender: data.gender,
            status: data.status,
            origin: data.origin,
            species: data.species
        }
        res.writeHead(200, {'content-type': 'application/json'})
        .end(JSON.stringify(char));
    })
    .catch(err => res.writeHead(500, {'Content-Type': 'text/plain'}).end('Hubo un error: ' + err));
}
module.exports = getCharDetail;