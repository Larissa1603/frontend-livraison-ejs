const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Client = sequelize.define('Client', {
  nom: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  telephone: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'clients',
  timestamps: true   // Sequelize gère createdAt et updatedAt
});

module.exports = Client;