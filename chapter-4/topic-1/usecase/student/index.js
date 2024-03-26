const studentRepo = require("../../repository/student");

exports.getStudents = async () => {
    const data = await studentRepo.getStudents();
    return data;
};

exports.getStudent = async (id) => {
    const data = await studentRepo.getStudent(id);
    return data;
};

exports.createStudent = async (payload) => {
    const data = await studentRepo.createStudent(payload);
    return data;
};

exports.updateStudent = async (id, payload) => {
    // update old data
    await studentRepo.updateStudent(id, payload);

    // find the new data
    const data = await studentRepo.getStudent(id);

    return data;
};

exports.deleteStudent = async (id) => {
    const data = await studentRepo.deleteStudent(id);
    return data;
};
