const { Router } = require("express");
const router = Router();

const { updateUser, userFollowCompany } = require("../controllers/user.controllers");

router.put("/", updateUser); //edit user profile
router.post("/follow_company", userFollowCompany); //follow company by user

module.exports = router;
