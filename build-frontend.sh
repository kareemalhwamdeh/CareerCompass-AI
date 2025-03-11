#!/bin/bash
# Script to build the frontend for production

echo "Building frontend for production..."
cd frontend
npm run build

# Move the build files to the correct location
echo "Moving build files to project root..."
mkdir -p ../build
cp -r build/* ../build/

echo "Frontend build complete!"