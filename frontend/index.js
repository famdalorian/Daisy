// Import dependencies
const express = require('express');

// Create an instance of the Express application
const app = express();
const { MongoClient } = require('mongodb');

const uri = ''; // MongoDB connection URL
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Configure middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Define API endpoints
app.get('/', (req, res) => {
  res.send('Daisy Rumble!');
});

app.get('/api/data', (req, res) => {
  const data = {
    message: 'This is sample data from the API',
    timestamp: new Date().toISOString(),
  };
  res.json(data);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
