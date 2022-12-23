'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await Promise.all([
            await queryInterface.addColumn(
                'Food_logs', // name of Source model
                'food_id', // name of the key we're adding
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Food', // name of Target model
                        key: 'id', // key in Target model that we're referencing
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                }
            ),
            await queryInterface.addColumn(
                'Food_logs', // name of Source model
                'stat_id', // name of the key we're adding
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Stats', // name of Target model
                        key: 'id', // key in Target model that we're referencing
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                }
            )])

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};
