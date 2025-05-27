"use strict"
// npm init -y
// npm  i express
// npm i dotenv
// npm i express-async-errors
// npm i cookie-session
// npm i mongoose

require("dotenv").config();
const PORT = process.env.PORT || 8000;

const express = require("express");
const app = express();

/* //?------------------------------------------------------------------ */
// Middlewares
require("express-async-errors")

// //* Parse Data
app.use(express.json());

//

//* DB Connection:
require("./src/configs/dbConnection")

/* //?------------------------------------------------------------------ */

// Routes:
app.all("/", (req,res)=>{
    res.send({
        message:"WELCOME TO PERSONNEL API"
    })
})

/* //?------------------------------------------------------------------ */

//Error Handler:
app.use(require("./src/middlewares/errorHandler"));

/* //?------------------------------------------------------------------ */

//Run Server:
app.listen(PORT, () =>
  console.log("Server Runnig at http://127.0.0.1:" + PORT)
);

