const express = require("express");
const mapController = require("../controller/map");
const router = express.Router();

router.get("/restaurants", mapController.getRestaurants);

module.exports = router;
