const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth.middlewares");
const checkIfUserMiddleware = require("../middlewares/checkIfUser.middlewares");

const { updateUser, userFollowCompany } = require("../controllers/user.controllers");

router.put("/", authMiddleware, checkIfUserMiddleware, updateUser); //edit user profile
router.post("/follow_company", authMiddleware, checkIfUserMiddleware, userFollowCompany); //follow company by user

module.exports = router;
