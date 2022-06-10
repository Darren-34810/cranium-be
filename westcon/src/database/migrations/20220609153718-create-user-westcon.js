'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('UserWestcons', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      // unique: true
    },
    phoneNumber: {
      type: Sequelize.STRING,
      // unique: true
    },
    ticket: {
      type: Sequelize.STRING
    },
    notify: {
      type: Sequelize.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('UserWestcons');
}