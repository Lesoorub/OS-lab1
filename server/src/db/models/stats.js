'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Stats extends Model {
        static associate(models) {
            this.belongsTo(models.User, {as: 'user'})
        }
    }

    Stats.init({
        date: DataTypes.DATE,
        actual_kcal: DataTypes.INTEGER,
        goal_kcal: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Stats',
    });
    return Stats;
};