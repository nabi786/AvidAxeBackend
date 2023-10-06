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




// projects
const ProjectSchema = new mongoose.Schema(
  {
    userID : {
      type : String,
      required : true,
    },
    imageTitle : {
      type : String,
    },
    imageJSON : {
      type : Object,
    },
    imageURL : {
      type : String
    }
  },

  { timestamps: true }
);

var campaign = mongoose.model("campaign", campaignModal);
var project = mongoose.model("project", ProjectSchema);
var object = { campaign,project};

module.exports = object;
