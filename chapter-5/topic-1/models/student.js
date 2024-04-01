"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class student extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            student.belongsTo(models.classes, { foreignKey: "class_id" });
        }
    }
    student.init(
        {
            name: DataTypes.STRING,
            photo: DataTypes.TEXT,
            class_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "student",
            paranoid: true, // enable soft delete
        }
    );
    return student;
};
