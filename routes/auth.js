const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const { AppError } = require("../utils/appError");

// @desc    Register
// @route   GET /auth/register
router.post("/register", AuthController.register);
router.post("/error", (req, res) => {
    throw new AppError({
        status: false,
        status_code: 300,
        message: "Error....",
    });
});
// @desc    Login
// @route   GET /auth/login
router.post("/login", AuthController.login);

module.exports = router;
