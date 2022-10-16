const { Router } = require("express");
const router = Router();

const { registerUser, loginUser, registerCompany} = require("../controllers/auth.controllers");

router.post("/new_user", registerUser);
router.post("/new_company", registerCompany);
router.post("/login", loginUser);

module.exports = router;