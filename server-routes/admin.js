const express = require("express");
const adminController = require("../controller/admin");
const router = express.Router();

router.get("/users", adminController.getLogedInUsers);
router.get("/latestSearchs", adminController.getLatestSearchs);

module.exports = router;
