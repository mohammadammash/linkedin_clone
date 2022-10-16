const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth.middlewares");
const checkIfUserMiddleware = require("../middlewares/checkIfUser.middlewares");

const { getAllJobs, searchAvailableJobs, applyForJob } = require("../controllers/user_job.controllers");

router.get("/",  getAllJobs);
router.get("/:job_query", authMiddleware, checkIfUserMiddleware, searchAvailableJobs);
router.post("/", authMiddleware, checkIfUserMiddleware, applyForJob);

module.exports = router;
