const express = require("express");
const app = express();
console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

/** 
 * 
 * Start a working express server
 * Serve request
*/
const indexFile = __dirname + '/views/index.html';
app.get("/", function (req, res) {
    res.sendFile(indexFile);
});

module.exports = app;
