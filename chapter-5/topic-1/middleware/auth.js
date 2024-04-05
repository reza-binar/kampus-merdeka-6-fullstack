const { getTokenFromHeaders, extractToken } = require("../helper/auth");
const { profile } = require("../usecase/auth/index");

exports.authMiddleware = (roles) => async (req, res, next) => {
    try {
        // get token from headers
        const token = getTokenFromHeaders(req?.headers);

        // extract token to get the user id
        const extractedToken = extractToken(token);

        // get user details by id
        const user = await profile(extractedToken?.id);

        // get the role and validate it
        if (!roles.includes(user?.role)) {
            return next({
                message: "Forbidden!",
                statusCode: 403,
            });
        }

        // pass the user profile to request
        req.user = user;

        next();
    } catch (error) {
        error.statusCode = 401; // unauthorized
        next(error);
    }
};
