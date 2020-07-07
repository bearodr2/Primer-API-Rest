const Sequelize = require('sequelize');

// Primero definimos sequelize con los parámetros de conexión
const sequelize = new Sequelize('censo', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mariadb'
});

module.exports = sequelize;