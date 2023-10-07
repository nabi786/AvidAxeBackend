const express = require("express")
const router = express.Router();
const {
    addProject,
    getProjectByID
} = require("../../controller/mongo/projects")


// router.post("/project", projectObj.addProject);
router.post("/project", addProject);

// get project data
router.get("/project", getProjectByID);


// upate project data
// router.patch("/project", updateProjct);


// exporting module
module.exports = router;