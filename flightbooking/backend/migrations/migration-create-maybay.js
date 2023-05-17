'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Maybays', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tenmaybay: {
                type: Sequelize.STRING
            },
            vantoc: {
                type: Sequelize.FLOAT
            },
            tongsoghe: {
                type: Sequelize.INTEGER
            },
            tongchieudai: {
                type: Sequelize.FLOAT
            },
            saicanh: {
                type: Sequelize.FLOAT
            },
            chieucao: {
                type: Sequelize.FLOAT
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
        await queryInterface.dropTable('Maybays');
    }
};