const express = require("express")
const router = express.Router();
const {
    addProject
} = require("../../controller/mongo/projects")


// router.post("/project", projectObj.addProject);
router.post("/project", addProject);

// router.get("/project", addProject);


// exporting module
module.exports = router;