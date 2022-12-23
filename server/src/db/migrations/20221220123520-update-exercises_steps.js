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
        Promise.all([

            await queryInterface.addColumn(
                'Exercises_steps', // name of Source model
                'file_id', // name of the key we're adding
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Files', // name of Target model
                        key: 'id', // key in Target model that we're referencing
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                }
            ),

            await queryInterface.addColumn(
                'Exercises_steps', // name of Source model
                'exercise_id', // name of the key we're adding
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Exercises', // name of Target model
                        key: 'id', // key in Target model that we're referencing
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                }
            )
        ])
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
