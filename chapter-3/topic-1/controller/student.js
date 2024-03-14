const studentUsecase = require("../usecase/student");

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

exports.getStudent = (req, res) => {
    const { id } = req.params;

    const data = studentUsecase.getStudent(id);
    if (!data) {
        return res.status(404).json({
            data: null,
            message: `Student with id ${id} is not found!`,
        });
    }

    const response = {
        data: data,
        message: null,
    };

    res.status(200).json(response);
};
