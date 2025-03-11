# Deployment Guide
### Author: Kareem Alhwamdeh

This document provides step-by-step instructions for deploying the CareerCompass AI application using Render.com's free hosting service.

## Deploying to Render.com

1. **Fork or Clone the Repository**
   - Fork this repository to your GitHub account
   - Alternatively, you can push your local copy to your own GitHub repository

2. **Create a Render.com Account**
   - Sign up for a free account at [render.com](https://render.com)
   - Verify your email address

3. **Connect GitHub to Render**
   - In your Render dashboard, click "New +"
   - Select "Web Service" 
   - Connect your GitHub account
   - Find and select your forked/cloned repository

4. **Configure Service Settings**
   - **Name**: career-compass-ai (or your preferred name)
   - **Environment**: Node
   - **Region**: Choose closest to your location
   - **Branch**: main (or your preferred branch)
   - **Build Command**: `npm install && ./setup-frontend.sh && ./build-frontend.sh`
   - **Start Command**: `NODE_ENV=production node src/backend/server.js`
   - **Plan**: Free

5. **Set Environment Variables**
   - Scroll down to "Environment Variables"
   - Add the following key-value pair:
     - Key: `API_KEY`
     - Value: Your actual API key for the AI service
   - Optional: Add any other environment variables needed

6. **Deploy the Service**
   - Click "Create Web Service"
   - Wait for the deployment process to complete (this may take a few minutes)

7. **Access Your Deployed Application**
   - Once the deployment is successful, you'll be provided a URL (e.g., `https://career-compass-ai.onrender.com`)
   - Click on the URL to access your deployed application

## Updating Your Deployment

When you make changes to your code:

1. Push your changes to your GitHub repository
2. Render will automatically detect the changes and deploy the updated version

## Troubleshooting

If you encounter issues with your deployment:

1. Check the Render logs for error messages
2. Ensure your environment variables are set correctly
3. Verify your build and start commands are correct
4. Check that your file paths are properly configured

## Limitations of Free Tier

The free tier of Render.com has some limitations:

- The service will spin down after 15 minutes of inactivity
- The first request after inactivity may take a few seconds to respond
- Limited computing resources and bandwidth

For a production application, consider upgrading to a paid plan for improved reliability and performance.