const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const { errorCheck } = require("../services/errorCheck");
const { requestHandler } = require("../utils/requestHandler");
const { responseSender } = require("../utils/responseSender");

/**
 * @description "Login Admin"
 * @method "POST"
 */
router.post("/register", AuthController.register);
router.get(
    "/error",
    (req, res, next) => requestHandler(errorCheck)(req, res, next),
    (req, res, next) => {
        next();
    },
    responseSender
);

module.exports = router;
