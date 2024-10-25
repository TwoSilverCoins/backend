// equipment.js
const { Sequelize, DataTypes } = require('sequelize');

// Connect to SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: console.log // Enable logging for debugging
  
});
// Define the Equipment model
const Equipment = sequelize.define('Equipment', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serialNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  purchaseDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  barcode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // Add timestamps for createdAt and updatedAt
});

module.exports = { Equipment, sequelize };
