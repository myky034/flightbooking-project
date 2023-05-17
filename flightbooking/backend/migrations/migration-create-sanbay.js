'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Sanbays', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tensanbay: {
                type: Sequelize.STRING
            },
            maICAO_IATA: {
                type: Sequelize.STRING
            },
            tinh: {
                type: Sequelize.STRING
            },
            soduongbang: {
                type: Sequelize.STRING
            },
            loaiduongbang: {
                type: Sequelize.STRING
            },
            chieudaidb: {
                type: Sequelize.FLOAT
            },
            baydem: {
                type: Sequelize.BOOLEAN
            },
            bayquocte: {
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
        await queryInterface.dropTable('Sanbays');
    }
};