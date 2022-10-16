const { Router } = require("express");
const router = Router();

const { getAllJobs, searchAvailableJobs, applyForJob } = require("../controllers/user_job.controller");

router.get("/", getAllJobs);
router.get("/:job_query", searchAvailableJobs);
router.post("/", applyForJob);

module.exports = router;
