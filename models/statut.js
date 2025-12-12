const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Statut = sequelize.define('Statut', {
  nom: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Statut;