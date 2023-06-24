const cors = require('cors');

const corsconfig = cors({
    origin: ['http://example.com'], // Set the allowed origin
    methods: ['GET', 'POST', 'PUT'], // Set the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Set the allowed headers
    credentials: true // Enable CORS credentials (e.g., cookies, authentication headers)
  });
  
module.exports = corsconfig;