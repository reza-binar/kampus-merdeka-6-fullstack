const classUsecase = require("../usecase/class");

exports.getClass = async (req, res) => {
    const { id } = req.params;
    const data = await classUsecase.getClass(id);

    res.status(200).json({
        message: "Successs",
        data,
    });
};
