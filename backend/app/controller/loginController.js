const services = require('../services');
const utils = require('../utils')

const loginController = async (req,res) => {
    const { username, password } = req.body;
    if (await services.loginService(username, utils.hashPassword(password))) {
      req.session.user = {
        username: username,
        group: await utils.getUserGroup(username)
      };
      res.status(200).json({ message: 'SUCCESS' });
    } else {
      res.status(401).json({ message: 'FAILURE' });
    }
};

module.exports = loginController;