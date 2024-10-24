const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const createRoutes = require('./create');
const readRoutes = require('./read');
const updateRoutes = require('./update');
const deleteRoutes = require('./delete');

const app = express();
app.use(bodyParser.json());


// Connect to MySQL
const sequelize = new Sequelize('inventory', 'username', 'password', {
    host: 'sqlite',
    dialect: 'sqlite',
});

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
});

sequelize.sync().then(() => {
    console.log('Database & tables created!');
});

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    next();
});

// Use Routes
app.use ('/api', createRoutes);
app.use ('/api', readRoutes);
app.use ('/api', updateRoutes);
app.use ('/api', deleteRoutes);

// Enable Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Inventory Management System API')
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
