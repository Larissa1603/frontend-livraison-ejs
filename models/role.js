const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Role = sequelize.define('Role', {
  nom: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Role;