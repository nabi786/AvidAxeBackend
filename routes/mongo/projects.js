const express = require("express")
const router = express.Router();
const {
    addProject,
    getProjectByID
} = require("../../controller/mongo/projects")


// router.post("/project", projectObj.addProject);
router.post("/project", addProject);

router.get("/project", getProjectByID);


// exporting module
module.exports = router;