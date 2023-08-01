const express = require("express");
const router = express.Router();
const { createCompaing } = require("../controller/compaign");

router.post("/campaign", createCompaing);

module.exports = router;
