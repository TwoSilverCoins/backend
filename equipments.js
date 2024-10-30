// Import Sequelize and DataTypes from the sequelize package
const { Sequelize, DataTypes } = require('sequelize');

// Connect to SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Specify the file path for the SQLite Database
  logging: console.log // Enable logging for debugging
  
});
// Define the Equipment model
const Equipment = sequelize.define('Equipment', {
  // Name field: a non-nullable string
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
  // Add timestamps for createdAt and updatedAt
  timestamps: true,
});
// Export the Equipment model and sequelize instance
module.exports = { Equipment, sequelize };
