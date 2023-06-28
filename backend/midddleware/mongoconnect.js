const mongoose = require('mongoose');

// MongoDB connection URL
const baseURI = 'mongodb://127.0.0.1:27017/'
const database = "lakshya"

const mongoURI = baseURI+database;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// Export the Mongoose connection
module.exports = mongoose;
