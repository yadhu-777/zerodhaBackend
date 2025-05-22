const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const {Schema} = require("mongoose");

const Userschema = new Schema({

name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}

});

Userschema.pre("save",async function(){
    this.password = await bcrypt.hash( this.password ,7)

})


module.exports = {Userschema}