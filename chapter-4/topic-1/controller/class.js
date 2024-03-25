const classUsecase = require("../usecase/class");

exports.getClasses = async (req, res, next) => {
    try {
        const data = await classUsecase.getClasses();

        res.status(200).json({
            message: "Successs",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.getClass = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await classUsecase.getClass(id);
        if (!data) {
            return next({
                message: `Class with id ${id} is not found!`,
                statusCode: 404,
            });
        }

        res.status(200).json({
            message: "Successs",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.createClass = async (req, res, next) => {
    try {
        const { name } = req.body;
        if (!name || name == "") {
            return next({
                message: "Name must be provided!",
                statusCode: 400,
            });
        }

        const data = await classUsecase.createClass({
            name,
        });

        res.status(201).json({
            message: "Successs",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.updateClass = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        if (!name || name == "") {
            return next({
                message: "Name must be provided!",
                statusCode: 400,
            });
        }

        const data = await classUsecase.updateClass(id, { name });

        res.status(200).json({
            message: "Successs",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteClass = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await classUsecase.deleteClass(id);

        res.status(200).json({
            message: "Successs",
            data,
        });
    } catch (error) {
        next(error);
    }
};
