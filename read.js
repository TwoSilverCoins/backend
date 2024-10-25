const express = require('express');
const { Equipment } = require('./equipments');

const router = express.Router();

router.get('/equipments', async (req, res) => {
    try {
        const equipments = await Equipment.findAll();
        res.status(200).send(equipments);
    } catch (error) {
        console.error('Error reading equipment:', error);
        res.status(500).send(error);
    }
});

router.get('/equipments/:id', async (req, res) => {
    try {
        const equipment = await Equipment.findByPk(req.params.id);
        if (!equipment) {
            return res.status(404).send();
        }
        res.status(200).send(equipment);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;