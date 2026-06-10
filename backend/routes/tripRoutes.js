const router = require("express").Router();
const {
    createTrip,
    getTrips
} = require("../controllers/tripController");

router.post("/", createTrip);
router.get("/", getTrips);

module.exports = router;