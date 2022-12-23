'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Food_logs extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Food_logs.init({
        is_eaten: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Food_logs',
    });
    return Food_logs;
};