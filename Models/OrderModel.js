const mongoose = require("mongoose");
const {OrderSchema} = require ("../Schmas/OrderSchema");

const {model} = require("mongoose");

const order =  mongoose.model("order",OrderSchema);

module.exports = { order };