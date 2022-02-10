const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true, unique: true},
    lastName: {type: String, required: true, unique: true},
    age: {type: String, required: true, unique: true},
    gender: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    city: {type: String, required: true, unique: true},
    country: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

module.exports = mongoose.model('User', userSchema);
