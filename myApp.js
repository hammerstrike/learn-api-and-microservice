const express = require("express");
const app = express();
require('dotenv').config()
console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

/**
 * Start a working express server
 * Serve request
 */
const indexFile = __dirname + "/views/index.html";
app.get("/", function (req, res) {
  res.sendFile(indexFile);
});

app.get("/json", function (req, res) {
  let message = "Hello World";
  res.json({
    message:
      process.env.MESSAGE_STYLE === "uppercase"
        ? message.toUpperCase()
        : message,
  });
});

module.exports = app;
