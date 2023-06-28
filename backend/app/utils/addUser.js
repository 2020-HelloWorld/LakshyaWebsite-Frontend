const models = require('../models');

const adduser = (userdata)=>{
    const {username,password,group} = userdata;
    
    const newUser = new models.userModel({
        "username": username,
        "password" : password,
        "group" : group,
      });
    return newUser.save()
      .then(savedUser => {
        console.log('User saved:', savedUser);
        return true;
      })
      .catch(error => {
        console.error('Error saving user:', error);
        return false;
      });    
};

module.exports = adduser;