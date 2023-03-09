const express = require("express");

let server = express();

server.use("/", express.static("../client/main"));

server.listen(8080, () => {
    console.log("Running!");
});