'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Exercises extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Exercises.init({
        title: DataTypes.STRING(140),
        description: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Exercises',
    });
    return Exercises;
};