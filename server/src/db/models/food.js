'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Food extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Food.init({
        name: DataTypes.STRING(140),
        weight: DataTypes.INTEGER,
        count: DataTypes.INTEGER,
        fat: DataTypes.INTEGER,
        protein: DataTypes.INTEGER,
        carbohyd: DataTypes.INTEGER,
        kcal: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Food',
    });
    return Food;
};