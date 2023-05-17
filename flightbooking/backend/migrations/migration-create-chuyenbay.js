'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Chuyenbays', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tgkhoihanh: {
                type: Sequelize.DATE
            },
            tgden: {
                type: Sequelize.DATE
            },
            tgbaydukien: {
                type: Sequelize.DATE
            },
            xuatphat: {
                type: Sequelize.STRING
            },
            dichden: {
                type: Sequelize.STRING
            },
            soghetrong: {
                type: Sequelize.STRING
            },
            tinhtrang: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: true,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Chuyenbays');
    }
};