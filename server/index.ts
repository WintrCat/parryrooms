import express, { Application } from "express";

let server: Application = express();

server.use("/", express.static("../client/main"));

server.listen(8080, () => {
    console.log("Running!");
});