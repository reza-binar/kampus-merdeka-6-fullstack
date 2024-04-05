"use strict";

const { sequelize } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("users", "role", {
            type: Sequelize.ENUM("user", "admin"),
            allowNull: false,
            defaultValue: "user",
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("users", "role");
    },
};
