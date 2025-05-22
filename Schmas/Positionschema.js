const mongoose = require("mongoose");


const {Schema} = require("mongoose");

const PostionSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day:String,
    isLoss: Boolean,
})
module.exports  = {PostionSchema}