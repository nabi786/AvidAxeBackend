const express = require("express")
const router = express.Router();
const obj = require("../../controller/mongo/campaign")

// get campaign
router.get("/campaign/:uuid", obj.getCampaign)


module.exports = router;