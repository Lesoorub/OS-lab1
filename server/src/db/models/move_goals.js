'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Move_goals extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Move_goals.init({
        text: DataTypes.TEXT,
        is_done: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Move_goals',
    });
    return Move_goals;
};