const express = require("express");
const router = express.Router();
const { createCompaing } = require("../controller/compaign");

router.post("/compaign", createCompaing);

module.exports = router;
