"use strict";
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* //?------------------------------------------------------------------ */
// Middlewares
require("express-async-errors");

//Parse Data
app.use(express.json());

//Session-Cookies
const session = require("cookie-session");

app.use(
  session({
    secret: process.env.SECRET_KEY,
  })
);

// DB Connection:
require("./src/configs/dbConnection");

// Query Handler:
app.use(require("./src/middlewares/queryHandler"));

// Authentication
app.use(require("./src/middlewares/authentication"))

/* //?------------------------------------------------------------------ */

// Routes:
app.all("/", (req, res) => {
  res.send({
    message: "WELCOME TO PERSONNEL API",
  });
});
// Department Route
app.use("/departments", require("./src/routes/department"));

// Personnel Route
app.use("/personnels", require("./src/routes/personnel"));

// Token Route
app.use("/tokens", require("./src/routes/token"));

// Auth Route
app.use("/auth", require("./src/routes/auth"));

app.use("*", (req, res) => {
  res.status(404).send({
    error: true,
    message: "This route not found",
  });
});
/* //?------------------------------------------------------------------ */

//Error Handler:
app.use(require("./src/middlewares/errorHandler"));

/* //?------------------------------------------------------------------ */

//Run Server:
app.listen(PORT, () =>
  console.log("Server Runnig at http://127.0.0.1:" + PORT)
);

/* //?------------------------------------------------------------------ */
//! Syncronization : Run it only once.
// require('./src/helpers/sync')()
