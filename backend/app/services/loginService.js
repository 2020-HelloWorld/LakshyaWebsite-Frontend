models = require('../models');

const loginService = (username,password) => {
    return models.userModel.findOne({ username: username, password: password })
    .then(user => {
      // If a user is found, authentication is successful
      console.log(user);
      return user !== null ? true : false;
    })
    .catch(error => {
      // Handle any errors that occur during authentication
      console.error('Error authenticating user:', error);
      return false;
    });
};

module.exports = loginService;