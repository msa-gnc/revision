"use strict"
const {mongoose}=require("../configs/dbConnection")

const DepartmenSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        unique:true
    }

},
{
    collection:"departments",
    timestamps:true
})

module.exports=mongoose.model("Department",DepartmenSchema)

