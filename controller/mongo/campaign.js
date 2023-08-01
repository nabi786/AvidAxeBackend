
const modal = require("../../model/modal")




exports.getCampaign = async(req,res)=>{
    try{
       
        console.log(req.params.uuid)
        if(!req.params.uuid){
            res.status(404).json({success : false, msg : "invalid Credtitionals"})

        }else{
            
            var data = await modal.campaign.find({supa_uuid : req.params.uuid});
            // console.log("item selected ", data)
            res.status(200).json({success : true, data});
        }
    }catch(err){
        res.status(500).json({success : false, msg : err.message})
    }
}