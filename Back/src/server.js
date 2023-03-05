const express = require("express");
const server = express();
const PORT = 3001;

const cors = require("cors");
const router = require("./routes/index");
const { favsRouter } = require("./utils/favs")
const morgan = require("morgan");

server.use(cors()); // habilito a todos a hacer solicitudes a mi servidor
server.use(express.json()); // para que funcinoe mi sv con formato JSON
server.use(morgan("dev")); // 
server.use("/", router);
server.use("/favs", favsRouter)

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});