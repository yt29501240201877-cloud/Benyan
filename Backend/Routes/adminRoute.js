const express = require("express")

const router = express.Router();

const loginAdmin = require("../Controllers/authAdmin.controller");

router.post("/login", loginAdmin);

module.exports = router;