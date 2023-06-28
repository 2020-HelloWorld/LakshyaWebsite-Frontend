models = require('../models');

const getUserGroup = (username)=>{
    return models.userModel.findOne({ 
        username: username
    })
    .then(user=>{
        return user.group;
    })
    .catch(error=>{
        console.log(error);
        return null;
    })
}

module.exports = getUserGroup;