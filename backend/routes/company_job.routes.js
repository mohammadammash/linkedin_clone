const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth.middlewares");

const { getownPostedJobs, getJobApplicants, postJob } = require("../controllers/company_job.controllers");

router.get("/", authMiddleware, getownPostedJobs);
router.get("/:job_id",authMiddleware, getJobApplicants);
router.post("/",authMiddleware, postJob);

module.exports = router;
