const { AppError } = require("../utils/appError");
const { errorCodes } = require("./errorCodes");

const errorCheck = (req, res, next) => {
    if (undefined) throw new AppError(errorCodes["OTP_INVALID"]);
    return "Sdfsdf";
};

module.exports = { errorCheck };
