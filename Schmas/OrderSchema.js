const mongoose = require("mongoose");


const {Schema} = require("mongoose");

const OrderSchema = new Schema({
 
    name: String,
    quantity: Number,
    price: Number,
    mode:String
  
})
module.exports  = {OrderSchema}