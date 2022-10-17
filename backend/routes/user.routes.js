const { Router } = require("express");
const router = Router();

const { updateUser, userFollowCompany, getAllJobs, searchAvailableJobs, applyForJob } = require("../controllers/user.controllers");

router.get("/", getAllJobs);
router.post("/", applyForJob);
router.put("/", updateUser); //edit user profile
router.post("/follow_company", userFollowCompany); //follow company by user
router.get("/:job_query", searchAvailableJobs);

module.exports = router;
