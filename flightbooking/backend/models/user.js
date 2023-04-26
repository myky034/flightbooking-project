'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    tennhanvien: DataTypes.STRING,
    manhanvien: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    ngaysinh: DataTypes.STRING,
    cccd: DataTypes.STRING,
    chucvu: DataTypes.STRING,
    phanquyen: DataTypes.STRING,
    diachi: DataTypes.STRING,
    sodienthoai: DataTypes.STRING,
    gioitinh: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    roleId: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};