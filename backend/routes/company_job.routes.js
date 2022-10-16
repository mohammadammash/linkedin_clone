const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth.middlewares");
const checkIfCompanyMiddleware = require("../middlewares/checkIfCompany.middlewares.js");

const { getownPostedJobs, getJobApplicants, postJob } = require("../controllers/company_job.controllers");

router.get("/", authMiddleware, checkIfCompanyMiddleware, getownPostedJobs);
router.get("/:job_id", authMiddleware, checkIfCompanyMiddleware, getJobApplicants);
router.post("/", authMiddleware, checkIfCompanyMiddleware, postJob);

module.exports = router;
