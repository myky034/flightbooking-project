'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tennhanvien: {
        type: Sequelize.STRING
      },
      manhanvien: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      ngaysinh: {
        type: Sequelize.DATE
      },
      cccd: {
        type: Sequelize.STRING
      },
      chucvu: {
        type: Sequelize.STRING
      },
      phanquyen: {
        type: Sequelize.STRING
      },
      diachi: {
        type: Sequelize.STRING
      },
      gioitinh: {
        type: Sequelize.BOOLEAN
      },
      sodienthoai: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      roleId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};