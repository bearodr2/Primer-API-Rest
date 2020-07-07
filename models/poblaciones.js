const Sequelize = require('sequelize');
const sequelize = require('./db');

// Definimos el modelo para Poblacion
const Poblacion = sequelize.define('poblacion', {
  id:{type: Sequelize.INTEGER, primaryKey: true},
  nombre: Sequelize.STRING,
  codigo: Sequelize.INTEGER,
  habitantes: Sequelize.INTEGER
  
});

module.exports = Poblacion;