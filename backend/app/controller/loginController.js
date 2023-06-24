const services = require('../services');

const loginController = async (req,res) => {
    const { username, password } = req.body;
    if (await services.loginService(username, password)) {
      req.session.user = {
        username: username
      };
      res.status(200).json({ message: 'SUCCESS' });
    } else {
      res.status(401).json({ message: 'FAILURE' });
    }
};

module.exports = loginController;