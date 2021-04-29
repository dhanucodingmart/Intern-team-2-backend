const { AppError } = require("../utils/appError");
const { errorCodes } = require("../utils/errorCodes");

const errorCheck = (req) => {
    if (undefined) throw new AppError(errorCodes["OTP_INVALID"]);
    console.log(req.body);
    return {
        message: "Success",
    };
};

module.exports = { errorCheck };
