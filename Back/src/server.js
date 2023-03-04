const express = require("express");
const server = express();
const cors = require("cors");
const PORT = 3001;
const router = require("./routes/index");
const morgan = require("morgan");

server.use(cors()); // habilito a todos a hacer solicitudes a mi servidor
server.use(express.json()); // para que funcinoe mi sv con formato JSON
server.use(morgan("dev")); // 
server.use("/", router);

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});