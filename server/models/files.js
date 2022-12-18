'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Files extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Files.init({
        id: DataTypes.STRING(140),
        size: DataTypes.NUMBER,
        mime_type: DataTypes.STRING(128),
        bucket: DataTypes.STRING(256)
    }, {
        sequelize,
        modelName: 'Files',
    });
    return Files;
};