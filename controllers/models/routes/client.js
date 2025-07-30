const express = require('express');
const router = express.Router();
const Client = require('../client');
router.get('/', async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
});
router.post('/', async (req, res) => {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
});
module.exports = router;