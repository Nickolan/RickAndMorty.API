const  router  = require("../routes/index");
let favs = [];

    router.post("/fav", (req, res) => {
        favs.push({...req.body});
        res.status(201).json(favs);
    });

    router.get("/fav", (req, res) => {
        return res.status(200).json(favs);
    })

    router.delete("/fav/:id", (req, res) => {
        const { id } = req.params;
        favs = favs.filter(f => f.id !== Number(id))
        return res.status(200).json(favs)
    })

module.exports = { favs };
