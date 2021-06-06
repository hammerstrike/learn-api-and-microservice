const express = require("express");
const app = express();
console.log("Hello World");

const absolutePath = __dirname + '/views/index.html';

/** 
 * 
 * Start a working express server
 * Serve request
 * app.get("/", function (req, res) {
 *      res.send("Hello Express");
 * });
*/
app.get("/", function (req, res) {
    res.sendFile(absolutePath);
});

module.exports = app;
