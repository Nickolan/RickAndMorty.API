const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

 async function getCharById (req, res) {
    const { id } = req.params;
    try {
    const response = await axios.get(URL + id)
    const char = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.image,
        gender: response.data.gender,
        species: response.data.species
    }
    return res.status(200).json(char)    
    } catch (err) {
    return res.status(500).json(err.message)
    }
   

    
};

module.exports = { getCharById };