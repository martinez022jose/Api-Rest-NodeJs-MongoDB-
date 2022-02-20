const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Country = new Schema({
    id: Number,
    name: String,
    capital: String,
    surface: Number,
    currency: Number,
    religion: String,
});

module.exports = mongoose.model('countries', Country);


