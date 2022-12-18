'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Rewards extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Rewards.init({
        name: DataTypes.STRING(140),
        cost: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Rewards',
    });
    return Rewards;
};