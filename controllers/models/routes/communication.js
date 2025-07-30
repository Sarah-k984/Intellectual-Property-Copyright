const express = require('express');
const router = express.Router();
const Communication = require('../communication');
router.get('/', async (req, res) => {
    try {
        const communications = await Communication.find().populate('clientId');
        res.json(communications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/', async (req, res) => {
    try {
        const communication = new communication(req.body);
        await communication.save();
        res.status(201).json(communication);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
module.exports = router;