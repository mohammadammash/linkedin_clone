const { Router } = require("express");
const router = Router();

const { registerUser, loginUser, registerCompany} = require("../controllers/user.controller");

router.post("/user", registerUser);
router.post("/company", registerCompany);
router.post("/login", loginUser);

module.exports = router;