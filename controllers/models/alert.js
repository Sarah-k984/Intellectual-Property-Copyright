const mongoose = require('mongoose');
const AlertShema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    type: { type: String, enum: ['overdue', 'risk', 'followup'], required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    resolved: { type: Boolean, default: false }
});

module.exports = mongoose.model('Alert', AlertShema);