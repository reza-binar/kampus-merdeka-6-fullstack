"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        // add deletedAt column in classes table
        await queryInterface.addColumn("classes", "deletedAt", {
            allowNull: true,
            type: Sequelize.DATE,
        });
        // add deletedAt column in students table
        await queryInterface.addColumn("students", "deletedAt", {
            allowNull: true,
            type: Sequelize.DATE,
        });
    },

    async down(queryInterface, Sequelize) {
        // remove column deletedAt in classes and students
        await queryInterface.removeColumn("classes", "deletedAt");
        await queryInterface.removeColumn("students", "deletedAt");
    },
};
