"use strict"
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGOURI || "mongodb://127.0.0.1:27017/personnelAPI" )
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log("DB Not Connected"+ err))

module.exports=mongoose;