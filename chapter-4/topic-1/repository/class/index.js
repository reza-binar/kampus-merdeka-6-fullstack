const { classes, student } = require("../../models");

exports.getClasses = async () => {
    const data = await classes.findAll({
        include: {
            model: student,
        },
    });
    return data;
};

exports.getClass = async (id) => {
    const data = await classes.findAll({
        where: {
            id,
        },
        include: {
            model: student,
        },
    });
    if (data.length > 0) {
        return data[0];
    }

    throw new Error(`Class is not found!`);
};

exports.createClass = async (payload) => {
    const data = await classes.create(payload);
    return data;
};

exports.updateClass = async (id, payload) => {
    const data = await classes.update(payload, {
        where: {
            id,
        },
    });
    return data;
};

exports.deleteClass = async (id) => {
    const data = await classes.destroy({ where: { id } });
    return null;
};
