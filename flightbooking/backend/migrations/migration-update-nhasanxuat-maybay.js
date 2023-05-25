'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('Maybays', 'nhasanxuat', {
            type: DataTypes.STRING
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Maybays', 'nhasanxuat');
    }
};