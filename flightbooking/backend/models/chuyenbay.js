'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ChuyenBay extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ChuyenBay.init({
        machuyenbay: DataTypes.STRING,
        tgkhoihanh: DataTypes.DATE,
        tgden: DataTypes.DATE,
        tgbaydukien: DataTypes.DATE,
        xuatphat: DataTypes.STRING,
        dichden: DataTypes.STRING,
        soghetrong: DataTypes.STRING,
        tinhtrang: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'ChuyenBay',
    });
    return ChuyenBay;
};