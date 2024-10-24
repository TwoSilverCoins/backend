const express = require('express');
const Equipment = require('./equipments');

const router = express.Router();

router.get('/equipments', async (req, res) => {
    try {
        const equipments = await Equipment.findAll();
        res.status(200).send(equipments);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;