const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) => {
    const { detailId } = req.params;
    try {
      let response = await axios(URL + detailId)
      const character = {
          image: response.data.image,
          name: response.data.name,
          gender: response.data.gender,
          species: response.data.species,
          status: response.data.status,
          origin: response.data.origin,
          id: response.data.id,
        };
        return res.status(200).json(character);
    } catch (error) {
      return res.status(500).send(error.message)
    }
    
  };
module.exports = { getCharDetail };