const jsonwebtoken = require("jsonwebtoken");
const { createUser, getUser } = require("../../repository/user");

exports.register = async (payload) => {
    let user = await createUser(payload);

    // Delete object password from user
    delete user.dataValues.password;

    // Create token
    const jwtPayload = {
        id: user.id,
    };

    const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });

    // return the user data and the token
    const data = {
        user,
        token,
    };

    return data;
};
