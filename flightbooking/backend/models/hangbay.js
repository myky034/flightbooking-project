'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class HangBay extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    HangBay.init({
        tenhangbay: DataTypes.STRING,
        logohang: DataTypes.STRING,
        mota: DataTypes.TEXT,
    }, {
        sequelize,
        modelName: 'HangBay',
    });
    return HangBay;
};