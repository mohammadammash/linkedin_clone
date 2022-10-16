const { Router } = require("express");
const router = Router();

const { registerUser, loginUser, updateUser, userFollowCompany } = require("../controllers/user.controller");

router.post("/", registerUser);
router.put("/", updateUser); //edit user profile
router.post("/login", loginUser);
router.post("/follow_company", userFollowCompany); //follow company by user

module.exports = router;
