const supabase = require("../../config/supabaseClient");
const modal = require("../../model/modal");

exports.getDomainData = async (req, res) => {
  try {
    if (req.query.uuid) {
      var campaing = await modal.campaign.find({ supa_uuid: req.query.uuid });

      res.status(200).json({ success: true, campaing });
    } else {
      res.status(404).json({ success: false, msg: "invalid parameter" });
    }
  } catch (err) {
    console.log("err ", err);
    res.status(500).json({ success: false, msg: err.message });
  }
};

exports.getAbout = async (req, res) => {
  try {
    if (req.query.uuid) {
      var campaing = await modal.campaign.find({ supa_uuid: req.query.uuid });

     
        if(campaing){

          res.status(200).json({ success: true, about_processed  : campaing[0].about_processed});
        }else{

          res.status(404).json({ success: false, msg  : "no data found with this uuid"});
        }
      
    } else {
      res.status(404).json({ success: false, msg: "invalid parameter" });
    }
  } catch (err) {
    console.log("err ", err);
    res.status(500).json({ success: false, msg: err.message });
  }
};

// get update campaing
exports.updateCampaing = async (req, res) => {
  try {
    console.log("working")
    if (!req.body.uuid) {
      res.status(404).json({ success: false, msg: "uuid is required" });
    } else if (!req.body.about_processed) {
      res
        .status(404)
        .json({ success: false, msg: "about_processed is required" });
    } else {
      var campaing = await modal.campaign.findOne(
        { supa_uuid: req.body.uuid }
      );

      if(campaing){

        var updatedData =  await modal.campaign.findOneAndUpdate(
          { supa_uuid: req.body.uuid },
          {about_processed : req.body.about_processed}
        );
        res.status(200).json({ success: true, msg : "updated successfully"});
      }else{

        res.status(200).json({ success: true, mmsg : `no data found with this uuid ${req.body.uuid}` });
      }

    }
  } catch (err) {
    console.log("err ", err);
    res.status(500).json({ success: false, msg: err.message });
  }
};





// get seo_semr_processed
exports.get_seo_fun = async (req, res) => {
  try {
    if (req.query.uuid) {
      var campaing = await modal.campaign.find({ supa_uuid: req.query.uuid });

     
        if(campaing){

          res.status(200).json({ success: true, seo_semr_processed:campaing[0].seo_semr_processed});
        }else{  

          res.status(404).json({ success: false, msg  : "no data found with this uuid"});
        }
      
    } else {
      res.status(404).json({ success: false, msg: "invalid parameter" });
    }
  } catch (err) {
    console.log("err ", err);
    res.status(500).json({ success: false, msg: err.message });
  }
};

// update seo_semr_processed
exports.update_SEO = async (req, res) => {
  try {
    console.log("working")
    if (!req.body.uuid) {
      res.status(404).json({ success: false, msg: "uuid is required" });
    } else if (!req.body.seo_semr_processed) {
      res
        .status(404)
        .json({ success: false, msg: "seo_semr_processed is required" });
    } else {
      var campaing = await modal.campaign.findOne(
        { supa_uuid: req.body.uuid }
      );

      if(campaing){

        var updatedData =  await modal.campaign.findOneAndUpdate(
          { supa_uuid: req.body.uuid },
          {seo_semr_processed : req.body.seo_semr_processed}
        );
        res.status(200).json({ success: true, msg : "updated successfully"});
      }else{

        res.status(200).json({ success: true, mmsg : `no data found with this uuid ${req.body.uuid}` });
      }

    }
  } catch (err) {
    console.log("err ", err);
    res.status(500).json({ success: false, msg: err.message });
  }
};



// get get_gspeed_processed
exports.get_gspeed_processed = async (req, res) => {
  try {
    if (req.query.uuid) {
      var campaing = await modal.campaign.find({ supa_uuid: req.query.uuid });

     
        if(campaing){
              // console.log(campaing[0].gspeed_processed)
          res.status(200).json({ success: true, gspeed_processed:campaing[0].gspeed_processed});
        }else{  

          res.status(404).json({ success: false, msg  : "no data found with this uuid"});
        }
      
    } else {
      res.status(404).json({ success: false, msg: "invalid parameter" });
    }
  } catch (err) {
    console.log("err ", err);
    res.status(500).json({ success: false, msg: err.message });
  }
};


// update g speed process
exports.update_gspeed_processed = async (req, res) => {
  try {
    console.log("working")
    if (!req.body.uuid) {
      res.status(404).json({ success: false, msg: "uuid is required" });
    } else if (!req.body.gspeed_processed) {
      res
        .status(404)
        .json({ success: false, msg: "gspeed_processed is required" });
    } else {
      var campaing = await modal.campaign.findOne(
        { supa_uuid: req.body.uuid }
      );

      if(campaing){

        var updatedData =  await modal.campaign.findOneAndUpdate(
          { supa_uuid: req.body.uuid },
          {gspeed_processed : req.body.gspeed_processed}
        );
        res.status(200).json({ success: true, msg : "updated successfully"});
      }else{

        res.status(200).json({ success: true, mmsg : `no data found with this uuid ${req.body.uuid}` });
      }

    }
  } catch (err) {
    console.log("err ", err);
    res.status(500).json({ success: false, msg: err.message });
  }
};



// get leads

// get get_leads
exports.get_leads = async (req, res) => {
  try {
    if (req.query.uuid) {
      var campaing = await modal.campaign.find({ supa_uuid: req.query.uuid });

     
        if(campaing){
              // console.log(campaing[0].gspeed_processed)
          res.status(200).json({ success: true, leads_processed:campaing[0].leads_processed});
        }else{  

          res.status(404).json({ success: false, msg  : "no data found with this uuid"});
        }
      
    } else {
      res.status(404).json({ success: false, msg: "invalid parameter" });
    }
  } catch (err) {
    console.log("err ", err);
    res.status(500).json({ success: false, msg: err.message });
  }
};


// update leads
exports.update_leads = async (req, res) => {
  try {
    // console.log("working")
    if (!req.body.uuid) {
      res.status(404).json({ success: false, msg: "uuid is required" });
    } else if (!req.body.leads_processed) {
      res
        .status(404)
        .json({ success: false, msg: "leads_processed is required" });
    } else {
      var campaing = await modal.campaign.findOne(
        { supa_uuid: req.body.uuid }
      );

      if(campaing){

        var updatedData =  await modal.campaign.findOneAndUpdate(
          { supa_uuid: req.body.uuid },
          {leads_processed : req.body.leads_processed}
        );
        res.status(200).json({ success: true, msg : "updated successfully"});
      }else{

        res.status(200).json({ success: true, mmsg : `no data found with this uuid ${req.body.uuid}` });
      }

    }
  } catch (err) {
    console.log("err ", err);
    res.status(500).json({ success: false, msg: err.message });
  }
};
