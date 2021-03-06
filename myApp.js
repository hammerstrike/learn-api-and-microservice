const express = require("express");
const app = express();
const bodyParser = require('body-parser');
require("dotenv").config();
console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));

// Middelware
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

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

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get("/:word/echo", function (req, res) {
  const { word } = req.params;
  res.json({ echo: word });
});

app.get('/name', function (req, res) {
    const { first, last } = req.query;
    res.send({ name: `${first} ${last}`});
})

app.post('/name', function (req, res) {
    const { first, last } = req.body;
    res.send({ name: `${first} ${last}`});
})

module.exports = app;
