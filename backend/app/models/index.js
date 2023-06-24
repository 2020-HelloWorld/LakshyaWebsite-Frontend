const mongoose = require('mongoose');

const userSchema = require('./userSchema');


userModel = mongoose.model('user', userSchema);

module.exports = {
    userModel,
};