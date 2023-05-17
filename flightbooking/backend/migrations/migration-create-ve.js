'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Ves', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            hangve: {
                type: Sequelize.STRING
            },
            sohanhkhach: {
                type: Sequelize.STRING
            },
            giave: {
                type: Sequelize.FLOAT
            },
            hanhlyxachtay: {
                type: Sequelize.FLOAT
            },
            hanhlykygui: {
                type: Sequelize.FLOAT
            },
            khuhoi: {
                type: Sequelize.BOOLEAN
            },
            thue: {
                type: Sequelize.FLOAT
            },
            tinhtrangve: {
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
        await queryInterface.dropTable('Ves');
    }
};