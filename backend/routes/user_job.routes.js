const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth.middlewares");

const { getAllJobs, searchAvailableJobs, applyForJob } = require("../controllers/user_job.controllers");

router.get("/", authMiddleware, getAllJobs);
router.get("/:job_query", authMiddleware, searchAvailableJobs);
router.post("/", authMiddleware, applyForJob);

module.exports = router;
