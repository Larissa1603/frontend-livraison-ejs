'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Adresses', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      rue: { type: Sequelize.STRING(255), allowNull: false },
      ville: { type: Sequelize.STRING(100), allowNull: false },
      code_postal: { type: Sequelize.STRING(20), allowNull: false },
      client_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Clients', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Adresses');
  }
};