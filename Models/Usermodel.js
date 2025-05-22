const mongoose = require("mongoose");
const {Userschema} = require ("../Schmas/UserSchema");



const user = mongoose.model("user",Userschema);

module.exports ={user}