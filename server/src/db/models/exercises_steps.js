'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Exercises_steps extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Exercises_steps.init({
        text: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Exercises_steps',
    });
    return Exercises_steps;
};