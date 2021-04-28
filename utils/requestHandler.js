const requestHandler = (method) => {
    return function (req, res, next) {
        const response = method(req);
        req.response = response;
        next();
    };
};

module.exports = {
    requestHandler,
};
