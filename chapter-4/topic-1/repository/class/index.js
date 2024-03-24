const { classes, student } = require("../../models");

exports.getClass = async (id) => {
    const data = await classes.findAll({
        where: {
            id,
        },
        include: {
            model: student,
        },
    });
    return data;
};
