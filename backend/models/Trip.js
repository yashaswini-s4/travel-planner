const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
    destination: String,
    budget: Number,
    days: Number
});

module.exports = mongoose.model("Trip", TripSchema);