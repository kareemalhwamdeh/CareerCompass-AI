#!/bin/bash
# This script sets up the frontend properly

echo "Setting up the frontend for Resume & Interview Prep..."

# Create a frontend directory if it doesn't exist
mkdir -p frontend

# Initialize a new React app in the frontend directory
echo "Creating a new React app with Create React App..."
npx create-react-app frontend

# Install required dependencies
echo "Installing required dependencies..."
cd frontend
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom axios

# Create necessary directories
echo "Setting up directory structure..."
mkdir -p src/components src/pages

# Copy template files
echo "Copying template files..."
cp ../src/frontend/App-template.js src/App.js
mkdir -p src/components
cp ../src/frontend/components/Navbar-template.js src/components/Navbar.js

# Update package.json to set up proxy for API
echo "Configuring proxy..."
node -e "
  const fs = require('fs');
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  packageJson.proxy = 'http://localhost:3001';
  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
"

echo "✅ Frontend setup complete!"
echo ""
echo "To run the application:"
echo "----------------------"
echo "1. Terminal 1 - Start the backend:"
echo "   cd $(dirname "$0")"
echo "   npm run dev"
echo ""
echo "2. Terminal 2 - Start the frontend:"
echo "   cd $(dirname "$0")/frontend"
echo "   npm start"
echo ""
echo "3. Open your browser to: http://localhost:3000"