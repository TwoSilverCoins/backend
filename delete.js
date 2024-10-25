const express = require('express');
const { Equipment } = require('./equipments');

const router = express.Router();

router.delete('/equipments/:id', async (req, res) => {
    try {
        const deleted = await Equipment.destroy( {
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(200).send();
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;