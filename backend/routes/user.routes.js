const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth.middlewares");

const { updateUser, userFollowCompany } = require("../controllers/user.controllers");

router.put("/", authMiddleware, updateUser); //edit user profile
router.post("/follow_company", authMiddleware, userFollowCompany); //follow company by user

module.exports = router;
