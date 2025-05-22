
const jwt = require("jsonwebtoken");
require("dotenv").config()

module.exports.secrettoken=(id)=>{
    return jwt.sign({id},process.env.Token,{
        expiresIn:3*24*60*60
    })
}