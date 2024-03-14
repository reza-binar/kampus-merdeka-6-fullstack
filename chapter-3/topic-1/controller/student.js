const studentUsecase = require("../usecase/student/student");

exports.getStudents = (req, res) => {
    const { name, city, province } = req.query;

    // call the usecase
    const data = studentUsecase.getStudents(name, city, province);

    const response = {
        data,
        message: null,
    };

    res.status(200).json(response);
};
