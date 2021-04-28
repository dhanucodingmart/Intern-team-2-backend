const errorHandler = (error, req, res, next) => {
    console.error(error);
    res.status(error.status_code ?? 500).json({
        status: false,
        status_code: error.status_code ?? 500,
        message:
            error.message ??
            "We're trying hard to fix the problem please try again",
    });
};

module.exports = errorHandler;
