// Import the express module
const express = require('express');
// Import the Equipment model from the equipments module
const { Equipment } = require('./equipments');

// Create a new router instance
const router = express.Router();

// Define a DELETE route for deleting an equipment entry by its ID
router.delete('/equipments/:id', async (req, res) => {
    try {
        // Attempt to delete the equipment entry with the specified ID
        const deleted = await Equipment.destroy( {
            where: { id: req.params.id },
        });
        // If the entry was deleted, send a 200 status code
        if (deleted) {
            res.status(200).send();
        } else {
            // If the entry was not found, send a 404 status code
            res.status(404).send();
        }
    } catch (error) {
        // If there was an error during the deletion, send a 500 status code
        res.status(500).send(error);
    }
});
// Export the router to be used in other parts of the application
module.exports = router;
