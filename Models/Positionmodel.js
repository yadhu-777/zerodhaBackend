const mongoose = require("mongoose");

const {PostionSchema} = require ("../Schmas/Positionschema");


const positions = mongoose.model("positons",PostionSchema);

module.exports = { positions };