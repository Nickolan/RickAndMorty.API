const  express = require("express")
const favsRouter = express()
let favs = [];

    favsRouter.post("/create", (req, res) => {
        favs.push({...req.body});
        res.status(201).json(favs);
    });

    favsRouter.get("/get", (req, res) => {
        return res.status(200).json(favs);
    })

    favsRouter.delete("/delete/:id", (req, res) => {
        const { id } = req.params;
        favs = favs.filter(f => f.id !== Number(id))
        return res.status(200).json(favs)
    })

module.exports = { favs, favsRouter };
