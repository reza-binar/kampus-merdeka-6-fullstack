"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class classes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            classes.hasMany(models.student, { foreignKey: "class_id" });
        }
    }
    classes.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "classes",
            tableName: "classes",
            paranoid: true, // enable soft delete
        }
    );
    return classes;
};
