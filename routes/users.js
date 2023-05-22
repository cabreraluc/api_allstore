const express = require("express");
const { registerUser, loginUser } = require("../controllers/usersController");

const router = express.Router();

router.post("/registeruser", registerUser);
router.post("/loginuser", loginUser);
router.update("/edituser", edituser);

module.exports = router;
