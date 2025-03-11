const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', routes);

// Serve static files from the React build folder in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../build')));

  // Handle any requests that don't match the API routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
  });
} else {
  // In development, provide a simple route for testing
  app.get('/', (req, res) => {
    res.send('Server is running. Use the React development server for the frontend (npm run dev:frontend).');
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
  if (process.env.NODE_ENV !== 'production') {
    console.log('For development, run the React frontend separately with: npm run dev:frontend');
  }
});