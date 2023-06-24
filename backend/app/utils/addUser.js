const models = require('../models');

const adduser = (userdata)=>{
    const {username,name,password,group} = userdata;
    
    const newUser = new models.userModel({
        "username": username,
        "name" : name,
        "password" : password,
        "group" : group,
      });

      newUser.save()
      .then(savedUser => {
        console.log('User saved:', savedUser);
        // Handle any additional logic
      })
      .catch(error => {
        console.error('Error saving user:', error);
        // Handle any error
      });    
};

module.exports = adduser;