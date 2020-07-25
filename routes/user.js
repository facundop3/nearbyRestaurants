const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

router.get("/myAccount", userController.getMyaccount);

module.exports = router;
