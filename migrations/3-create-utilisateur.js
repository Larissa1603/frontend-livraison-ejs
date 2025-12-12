'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Utilisateurs', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      nom: { type: Sequelize.STRING(100), allowNull: false },
      email: { type: Sequelize.STRING(100), allowNull: false, unique: true },
      mot_de_passe: { type: Sequelize.STRING(255), allowNull: false },
      role_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Roles', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Utilisateurs');
  }
};