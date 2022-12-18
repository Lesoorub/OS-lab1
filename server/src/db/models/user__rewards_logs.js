'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User__Rewards_logs extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    User__Rewards_logs.init({
        timestamp: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'User__Rewards_logs',
    });
    return User__Rewards_logs;
};