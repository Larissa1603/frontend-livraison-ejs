'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Livraisons', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      description: { type: Sequelize.STRING(255), allowNull: false },
      date_livraison: { type: Sequelize.DATE, allowNull: false },
      client_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Clients', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      adresse_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Adresses', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      utilisateur_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Utilisateurs', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      statut_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Statuts', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Livraisons');
  }
};