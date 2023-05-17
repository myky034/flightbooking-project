'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class HangVe extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    HangVe.init({
        tenhangve: DataTypes.STRING,
        loaive: DataTypes.STRING,
        giavecoban: DataTypes.FLOAT,
    }, {
        sequelize,
        modelName: 'HangVe',
    });
    return HangVe;
};