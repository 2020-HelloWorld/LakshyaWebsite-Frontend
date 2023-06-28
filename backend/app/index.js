const express = require('express');

const mongoose = require('../midddleware/mongoconnect');
const session = require('../config/sessionconfig');
const cors = require('../config/corsconfig');
const router  = require('./routes');

const app = express();

app.use(cors); //Set the CORS policies
app.use(session); //Define this before any routes which uses session

app.use(express.json()); //This is required for parsing json requests
app.use(express.urlencoded({ extended: true }));

app.use('/', router); //Setting up the router for app

const port = 4000;
app.listen(port, () => {
  console.log('Server is running on port '+port);
});