'use strict';
const { stat, Stats } = require('fs');
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Rest_goals extends Model { 
        static associate(models) {
            //this.belongsTo(models.Stats, {as: 'stat'})
        }
    }

    Rest_goals.init({
        text: DataTypes.TEXT,
        is_done: DataTypes.BOOLEAN,
        is_done2: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Rest_goals',
    });

    Rest_goals.stat = Rest_goals.belongsTo(Stats)

    return Rest_goals;
};