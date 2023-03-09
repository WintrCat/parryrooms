"use strict";
exports.__esModule = true;
var express_1 = require("express");
var server = (0, express_1["default"])();
server.use("/", express_1["default"].static("../client/main"));
server.listen(8080, function () {
    console.log("Running!");
});
