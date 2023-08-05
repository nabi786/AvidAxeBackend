const express = require("express")
const router = express.Router();
const {
    getDomainData , 
    updateCampaing,getAbout,get_seo_fun,
    update_SEO,
    get_gspeed_processed,
    update_gspeed_processed,
    get_leads,
    update_leads} = require("../../controller/v1_controller/domain")
const auth = require("../../midlewear/auth")



// api to get campaign data
router.get("/v1/domain",auth, getDomainData);

// get about
router.get("/v1/domain/about",auth, getAbout);

// update campaing
router.patch("/v1/domain/about", updateCampaing);

// get seo_semr_processed
router.get("/v1/domain/seo",auth, get_seo_fun);

// update seo_semr_processed
router.patch("/v1/domain/seo", update_SEO);

// get gspeed_processed
router.get("/v1/domain/gspeed", get_gspeed_processed);

// udpate gspeed_processed
router.patch("/v1/domain/gspeed", update_gspeed_processed);


// get leads
router.get("/v1/domain/leads", get_leads);

// udpate leads
router.patch("/v1/domain/leads", update_leads);







module.exports = router;