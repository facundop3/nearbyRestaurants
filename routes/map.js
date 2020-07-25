const express = require("express");
const mapController = require("../controller/map");
const router = express.Router();

router.get("/map", mapController.getMap);

module.exports = router;
