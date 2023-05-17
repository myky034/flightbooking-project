'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ChangBay extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ChangBay.init({
        sanbaydi: DataTypes.STRING,
        sanbayden: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'ChangBay',
    });
    return ChangBay;
};