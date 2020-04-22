const express = require("express");
const logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));

module.exports = app;
