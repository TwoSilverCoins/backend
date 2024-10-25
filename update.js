const express = require('express');
const { Equipment } = require('./equipments');

const router = express.Router();

router.put('/equipments/:id', async (req, res) => {
    try {
        cosnt [updated] - await Equipment.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedEquipment = await Equipment.findByPK(req.params.id);
            res.status(200).send(updatedEquipment);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;