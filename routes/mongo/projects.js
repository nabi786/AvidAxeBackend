const express = require("express")
const router = express.Router();
const {
    addProject,
    getProjectByID,
    updateProjct,
    getProjectsByUserID
} = require("../../controller/mongo/projects")


// router.post("/project", projectObj.addProject);
router.post("/project", addProject);

// get project data
router.get("/project/:id", getProjectByID);
// get all projects by userID
router.get("/projectv2/:userID", getProjectsByUserID);


// upate project data
router.patch("/project", updateProjct);


// exporting module
module.exports = router;