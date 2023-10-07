
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
            var data = await newPorject.save()
            res.status(200).json({success : true, msg : "project added succesfully" ,data });
        

    }catch(err){
        res.status(500).json({success : false, msg : err.message});
    }
}

// get data by ID
exports.getProjectByID = async(req,res)=>{
    try{
        var project = await modal.project.findOne({_id : req.body.id})
        if(project){
            res.status(200).json({status : true, data : project});
        }else{
            res.status(404).json({status : false, msg : "no data found"});
        }
        
    }catch(err){
        res.status(500).json({status : false, msg : err.message});
    }
}



// update proejct Data
exports.updateProjct = async(req,res)=>{
    try{
        var project = await modal.project.findOne({_id : req.body.id})
        if(project){
            res.status(200).json({status : true, data : project});
        }else{
            res.status(404).json({status : false, msg : "no data found"});
        }
        
    }catch(err){
        res.status(500).json({status : false, msg : err.message});
    }
}