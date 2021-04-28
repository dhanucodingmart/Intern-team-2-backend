const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

// @desc    Register
// @route   GET /auth/register
router.post("/register", AuthController.register);

// @desc    Login
// @route   GET /auth/login
router.post("/login", AuthController.login);

module.exports = router;
