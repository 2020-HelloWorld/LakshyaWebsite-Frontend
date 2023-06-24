const session = require('express-session');

const sessionconfig = session({
    secret: 'thesecretkeyforsessionsigning',
    resave: false,
    saveUninitialized: false
  });

module.exports = sessionconfig;