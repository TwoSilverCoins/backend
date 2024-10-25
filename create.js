const express = require('express');
const { Equipment, sequelize } = require('./equipments');

const router = express.Router();
// Create Route //
router.post('/equipments', async (req, res) => {
    console.log('Received payload:', req.body); // Log the incoming data
    try {
        // Explicitly structure the data into the required format
        const equipmentData = {
            name: req.body.name,
            category: req.body.category,
            brand: req.body.brand,
            model: req.body.model,
            serialNumber: req.body.serialNumber,
            purchaseDate: req.body.purchaseDate, // Handle as string for now
            location: req.body.location,
            condition: req.body.condition,
            barcode: req.body.barcode
        };

        // Use raw query as a workaround for SQLite parameter binding issues
        const [results, metadata] = await sequelize.query(
            'INSERT INTO Equipment (name, category, brand, model, serialNumber, purchaseDate, location, condition, barcode, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        {
            replacements: [
                equipmentData.name,
                equipmentData.category,
                equipmentData.brand,
                equipmentData.model,
                equipmentData.serialNumber,
                equipmentData.purchaseDate,
                equipmentData.location,
                equipmentData.condition,
                equipmentData.barcode,
                new Date(), // createdAt
                new Date() // updatedAt
            ],
            type: sequelize.QueryTypes.INSERT
        }
    );
        
        res.status(201).send({ id: results, ...equipmentData });
    } catch (error) {
        console.error('Error creating equipment:', error.message); // Log any errors
        res.status(400).send({error: error.message }); // Send the error message for better debugging
    }
});

module.exports = router;