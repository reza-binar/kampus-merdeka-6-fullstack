const { register, login, profile } = require("../usecase/auth");
const { getTokenFromHeaders, extractToken } = require("../helper/auth");

exports.register = async (req, res, next) => {
    try {
        // get the body
        const { email, password, name } = req.body;

        // get the photo
        const { photo } = req.files;

        if (email == "" || !email) {
            return next({
                message: "Email must be filled!",
                statusCode: 400,
            });
        }
        if (password == "" || !password) {
            return next({
                message: "Password must be filled!",
                statusCode: 400,
            });
        }
        if (name == "" || !name) {
            return next({
                message: "Name must be filled!",
                statusCode: 400,
            });
        }

        const data = await register({
            email,
            password,
            name,
            photo,
        });

        res.status(200).json({
            message: "Success",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        // get the body
        const { email, password } = req.body;

        if (email == "" || !email) {
            return next({
                message: "Email must be filled!",
                statusCode: 400,
            });
        }
        if (password == "" || !password) {
            return next({
                message: "Password must be filled!",
                statusCode: 400,
            });
        }

        // login logic
        const data = await login(email, password);

        res.status(200).json({
            message: "Success",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.profile = async (req, res, next) => {
    try {
        // get token from headers
        const token = getTokenFromHeaders(req.headers);

        // extract token to get the user id
        const extractedToken = extractToken(token);

        // get user by id
        const data = await profile(extractedToken.id);

        res.status(200).json({
            message: "Success",
            data,
        });
    } catch (error) {
        next(error);
    }
};
