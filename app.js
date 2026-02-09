const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const studentRoutes = require('./routes/studentroute');

// Use routes
app.use('/students', studentRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
