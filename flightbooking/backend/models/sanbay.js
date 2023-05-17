'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SanBay extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    SanBay.init({
        tensanbay: DataTypes.STRING,
        maICAO_IATA: DataTypes.STRING,
        tinh: DataTypes.STRING,
        soduongbang: DataTypes.STRING,
        loaiduongbang: DataTypes.STRING,
        chieudaidb: DataTypes.FLOAT,
        baydem: DataTypes.BOOLEAN,
        bayquocte: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'SanBay',
    });
    return SanBay;
};