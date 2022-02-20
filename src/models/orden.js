const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Orden = new Schema({
    id: Number,
    description: String,
    customer: String,
    amount: Number,
    items: { String },
    cantTotal: Number,
});

module.exports = mongoose.model('orden', Orden);
