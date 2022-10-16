const { Router } = require("express");
const router = Router();

const { getownPostedJobs, getJobApplicants, postJob } = require("../controllers/company_job.controllers");

router.get("/", getownPostedJobs);
router.get("/:job_id", getJobApplicants);
router.post("/", postJob);

module.exports = router;
