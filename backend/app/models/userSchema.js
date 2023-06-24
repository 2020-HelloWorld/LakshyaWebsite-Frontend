const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "username":String,
    "name" : String,
    "password" : String,
    "group" : String, 
});

module.exports = userSchema;