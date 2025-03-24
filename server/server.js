const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./controllers/routes');
const config = require('./config/config');

const app = express();
const PORT = config.port;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', routes);

// Serve static files from the React build folder in production
if (config.nodeEnv === 'production') {
  const clientBuildPath = path.join(__dirname, config.clientBuildPath);
  console.log(`Serving static files from: ${clientBuildPath}`);
  app.use(express.static(clientBuildPath));

  // Handle any requests that don't match the API routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
} else {
  // In development, provide a simple route for testing
  app.get('/', (req, res) => {
    res.send('Server is running. Use the React development server for the frontend (npm run client).');
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
  if (config.nodeEnv !== 'production') {
    console.log('For development, run the React frontend separately with: npm run client');
  }
});