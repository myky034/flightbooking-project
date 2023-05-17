'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ve extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Ve.init({
        hangve: DataTypes.STRING,
        sohanhkhach: DataTypes.STRING,
        giave: DataTypes.FLOAT,
        hanhlyxachtay: DataTypes.FLOAT,
        hanhlykygui: DataTypes.FLOAT,
        khuhoi: DataTypes.BOOLEAN,
        thue: DataTypes.FLOAT,
        tinhtrangve: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Ve',
    });
    return Ve;
};