const errorCodes = {
    USER_NOT_FOUND: {
        status: false,
        message: "User doesn't exists",
        status_code: 401,
    },
    INVALID_PASSWORD: {
        status: false,
        message: "Invalid Password",
        status_code: 400,
    },
    INTERNAL_SERVER_ERROR: {
        status: false,
        message: "Internal Server Error. Please try again",
        status_code: 500,
    },
    USER_ALREADY_EXIST: {
        status: false,
        message: "User already exists",
        status_code: 409,
    },
    OTP_INVALID: {
        status: false,
        message: "Invalid OTP. Kindly try again",
        status_code: 406,
    },
    TOKEN_INVALID: {
        status: false,
        message: "Token is not valid",
        status_code: 403,
    },
    TOKEN_REQUIRED: {
        status: false,
        message: "Token is required",
        status_code: 401,
    },
    DUPLICATE_ENTRY: {
        status: false,
        message: "Duplicate Entry",
        status_code: 409,
    },
    NO_USER_EXIST: {
        status: false,
        message: "No user exist",
        status_code: 204,
    },
    ADMIN_ACCESS: {
        status: false,
        message: "Only admin can access this information",
        status_code: 403,
    },
    EMAIL_NOT_SENT: {
        status: false,
        message: "Unable to send an email for verification",
        status_code: 500,
    },
    EMAIL_VERIFICATION_FAIL: {
        status: false,
        message: "Invalid or expired link. Please try again",
        status_code: 403,
    },
};

module.exports = {
    errorCodes,
};
