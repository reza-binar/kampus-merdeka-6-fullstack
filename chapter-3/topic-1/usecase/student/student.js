const studentRepo = require("../../repository/student/student");

exports.getStudents = (name, city, province) => {
    const data = studentRepo.getStudents(name, city, province);
    return data;
};
