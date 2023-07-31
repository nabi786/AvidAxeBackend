const crypto = require("crypto");
const { checkStatus } = require("../utils/axios");
const extractDomain = require("extract-domain");
const {
  insert_to_supabase,
  check_user_and_uuid,
} = require("../supabase/supabse_api");

const modelObj = require("../model/modal");

exports.createCompaing = async (req, res) => {
  try {
    if (!req.body.cust_id || !req.body.domain) {
      res.status(404).json({ success: false, msg: "invalid Creditionals" });
    } else {
      var uuid = crypto.randomUUID();
      var cust_id = req.body.cust_id;
      var http_status = await checkStatus(req.body.domain);
      console.log("this status ", http_status);
      var cmp_domain = extractDomain(req.body.domain);

      var tabale_data = {
        cust_id: cust_id,
        cmp_domain: cmp_domain,
        http_status: http_status,
        uuid: uuid,
      };

      var match = await check_user_and_uuid("campaign", tabale_data);
      var datAry = match.data;
      console.log(datAry);
      if (datAry.length < 1) {
        var result = insert_to_supabase("campaign", tabale_data);
        if (result.success == false) {
          res.status(500).json({ success: false, msg: "failed" });
        } else {


          // adding compaign data to mongodb
          var newCompaing = new modelObj.campaign({
            raw : [{}],
            processed : [{}],
            supa_baseID: uuid
          })

        
          newCompaing.save().then((data,err)=>{
            console.log("data ", data)
            console.log("err ", err)
          }) 

          res
            .status(200)
            .json({ success: true, msg: "data added to supabase" });
        }
      } else {
        res.status(500).json({
          success: false,
          msg: "same uuid and same user already exist",
        });
      }
    }
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};
