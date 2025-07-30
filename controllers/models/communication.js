const mongoose = require('mongoose');
const communicationSchema = new mongoose.Schema({
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true},
    date: { type: Date, default: Date.now },
    method: { type: String, enum: ['email', 'phone', 'sms'], required: true },
    notes: { type: String, required: true }
});

module.exports = mongoose.model('Communication', communicationSchema);