const mongoose = require("mongoose");
const {HoldingSchema} = require("../Schmas/Holdingschema");

const {model} = require("mongoose");

const holdings =  mongoose.model("holdings",HoldingSchema);

module.exports = { holdings };