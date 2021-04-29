const { AppError } = require("./appError");
const { errorCodes } = require("./errorCodes");

const responseSender = (req, res, next) => {
    if (!req.response) throw new AppError(errorCodes["INTERNAL_SERVER_ERROR"]);
    res.status(200).json({
        status: true,
        status_code: 200,
        ...req.response,
    });
};

module.exports = {
    responseSender,
};
