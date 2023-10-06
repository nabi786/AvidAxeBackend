
const modal = require("../../model/modal");


// this fucntino used to add project
exports.addProject = async(req,res)=>{
    try{

        console.log("api working ")
        console.log("req.body ", req.body)
        
            var newPorject = new modal.project({
                userID : req.body.userID,
                imageTitle  :req.body.imageTitle,
                imageJSON  :req.body.imageJSON,
                imageURL  :req.body.imageURL
            })
            
            await newPorject.save()
            res.status(200).json({success : true, msg : "project added succesfully"});
        

    }catch(err){
        res.status(500).json({success : false, msg : err.message});
    }
}