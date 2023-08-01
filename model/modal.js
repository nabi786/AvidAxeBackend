const mongoose = require("mongoose");

const campaignModal = new mongoose.Schema(
  {
    supa_uuid : {
        type : String,
        required : true
    },
    raw: {
      type: Object,
    },
    processed: {
      type: Object,
    },
    about_processed : {
        type : Boolean,
        default : false
    },
    seo_semr_processed : {
        type : Boolean,
        default : false
    },
    gspeed_processed :{
        type : Boolean,
        default : false
    },
    leads_processed : {
        type : Boolean,
        default : false
    }
  },

  { timestamps: true }
);

var campaign = mongoose.model("campaign", campaignModal);

var object = { campaign };

module.exports = object;
