const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const createRoutes = require('./create');
const readRoutes = require('./read');
const updateRoutes = require('./update');
const deleteRoutes = require('./delete');

const app = express();
app.use(bodyParser.json());
// Enable CORS
app.use(cors( {
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


// Connect to SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
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

sequelize.sync({ force: true }).then(() => { // Force sync for troubleshooting
    console.log('Database & tables created!');
}).catch(err => {
    console.error('Error syncing database:', err);
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
