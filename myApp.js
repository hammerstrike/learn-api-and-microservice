const express = require("express");
const app = express();

const helmet = require("helmet");

app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));

