const Trip = require("../models/Trip");

exports.createTrip = async (req, res) => {
    try {
        const trip = await Trip.create(req.body);
        res.status(201).json(trip);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getTrips = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (error) {
        res.status(500).json(error);
    }
};