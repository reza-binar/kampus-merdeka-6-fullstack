const classRepo = require("../../repository/class");

exports.getClass = async (id) => {
    const data = await classRepo.getClass(id);
    return data;
};
