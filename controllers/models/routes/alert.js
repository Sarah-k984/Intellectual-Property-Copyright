const express = require('express');
const router = express.Router();
const Alert = require('../Alert');
router.get('/', async (req, res) => {
    try {
        const alerts = await Alert.find().populate('clientId');
        res.json(alerts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/', async (req, res) => {
    try {
        const alert = new Alert(req.body);
        await alert.save();
        res.status(201).json(alert);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
module.exports = router;
