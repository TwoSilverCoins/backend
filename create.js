const express = require('express');
const Equipment = require('./equipments');

const router = express.Router();
// Create Route //
router.post('/equipments', async (req, res) => {
    try {
        const newEquipement = new Equipment(req.body);
        res.status(201).send(newEquipment);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;