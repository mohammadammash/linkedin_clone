const { Router } = require("express");
const router = Router();

const { updateUser, userFollowCompany, getAllJobs, applyForJob } = require("../controllers/user.controllers");

router.get("/", getAllJobs);
router.post("/job", applyForJob);
router.put("/", updateUser); //edit user profile
router.post("/follow_company", userFollowCompany); //follow company by user

module.exports = router;
