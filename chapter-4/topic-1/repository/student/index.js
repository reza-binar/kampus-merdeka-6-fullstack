const { classes, student } = require("../../models");

exports.getStudents = async () => {
    const data = await student.findAll({
        include: {
            model: classes,
        },
    });
    return data;
};

exports.getStudent = async (id) => {
    const data = await student.findAll({
        where: {
            id,
        },
        include: {
            model: classes,
        },
    });
    if (data.length > 0) {
        return data[0];
    }

    throw new Error(`Student is not found!`);
};

exports.createStudent = async (payload) => {
    const data = await student.create(payload);
    return data;
};

exports.updateStudent = async (id, payload) => {
    const data = await student.update(payload, {
        where: {
            id,
        },
    });
    return data;
};

exports.deleteStudent = async (id) => {
    const data = await student.destroy({ where: { id } });
    return null;
};
