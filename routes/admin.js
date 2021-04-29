const express = require("express");
const router = express.Router();
const { errorCheck } = require("../services/adminService");
const { requestHandler } = require("../utils/requestHandler");
const { responseSender } = require("../utils/responseSender");

router.get(
    "/error",
    (req, res, next) => requestHandler(errorCheck)(req, res, next),
    responseSender
);

module.exports = router;
