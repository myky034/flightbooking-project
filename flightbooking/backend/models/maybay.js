'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MayBay extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    MayBay.init({
        mamaybay: DataTypes.STRING,
        tenmaybay: DataTypes.STRING,
        nhasanxuat: DataTypes.STRING,
        vantoc: DataTypes.FLOAT,
        tongsoghe: DataTypes.INTEGER,
        tongchieudai: DataTypes.FLOAT,
        saicanh: DataTypes.FLOAT,
        chieucao: DataTypes.FLOAT,
    }, {
        sequelize,
        modelName: 'MayBay',
    });
    return MayBay;
};