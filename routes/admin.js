const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const { errorCheck } = require("../services/errorCheck");
const { requestHandler } = require("../services/requestHandler");
const { responseSender } = require("../services/responseSender");

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
