const express = require("express");
const app = express();
console.log("Hello World");

app.get("/", function (req, res) {
  res.send("Response String");
});

module.exports = app;
