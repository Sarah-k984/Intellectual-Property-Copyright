const mongoose = require('mongoose');
const clientschema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    debtAmount: Number,
    lastContact: String,
    risk : {
        type: String,
        enum: ['low', 'medium', 'high'],
    }, status: { type: String, enum: ['active', 'overdue', 'settled']},
});


module.exports = mongoose.model('Client', clientschema);