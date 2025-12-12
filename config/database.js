const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,       // gestion_livraison
  process.env.DB_USER,       // akram_latrous
  process.env.DB_PASSWORD,   // Marka123456
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3307,
    dialect: 'mysql'         
  }
);

module.exports = { sequelize };