
app.post('/transactions', (req, res) => {
    const newTransaction = new Transaction(req.body);
    newTransaction.save((err, transaction) => {
        if (err) return res.status(400).send(err);
        // Update stock levels based on transaction type and quantity
        Equipment.findById(transaction.equipment_id, (err, equipment) => {
            if (err) return res.status(400).send(err);
            equipment.stock = transaction.type === 'in' ? equipment.stock + transaction.quantity : equipment.stock - transaction.quantity;
            equipment.save((err, updatedEquipment) => {
                if (err) return res.status(400).send(err);
                res.status(201).send({ transaction, updatedEquipment});
            });
        });
    });
});