"use strict"
const Token = require("../models/token")
module.exports = async (req,res,next)=>{
     // Authorization: Token ...tokenKey...
    // Authorization: ApiKey ...tokenKey...
    // Authorization: Bearer ...tokenKey...
    // Authorization: Auth ...tokenKey...
    // Authorization: X-API-KEY ...tokenKey...
    // Authorization: x-auth-token ...tokenKey...

    req.user = null;
    // Get token from header:
    const auth = req.headers.authorization || null // token ...TokenKey...
    const tokenKey=auth.split(" ") ? auth.split(" ")[1]:null
   
    if(tokenKey && tokenKey[0] == "Token"){
        const tokenData = await Token.findOne({token : tokenKey[1]}).populate("userId")
        console.log(tokenData)
        if(tokenData) req.user = tokenData.userId
    }



    next()
}
