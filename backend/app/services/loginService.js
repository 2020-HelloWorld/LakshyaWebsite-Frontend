models = require('../models');

const loginService = (username,password) => {
    return models.userModel.findOne({ username: username, password: password })
    .then(user => {
      console.log(user);
      return user !== null ? true : false;
    })
    .catch(error => {
      console.error('Error authenticating user:', error);
      return false;
    });
};

module.exports = loginService;