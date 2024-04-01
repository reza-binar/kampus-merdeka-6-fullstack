const classRepo = require("../../repository/class");

exports.getClasses = async () => {
    const data = await classRepo.getClasses();
    return data;
};

exports.getClass = async (id) => {
    const data = await classRepo.getClass(id);
    return data;
};

exports.createClass = async (payload) => {
    const data = await classRepo.createClass(payload);
    return data;
};

exports.updateClass = async (id, payload) => {
    // update old data
    await classRepo.updateClass(id, payload);

    // find the new data
    const data = await classRepo.getClass(id);

    return data;
};

exports.deleteClass = async (id) => {
    const data = await classRepo.deleteClass(id);
    return data;
};
