/**
 * Global configuration settings for CareerCompass AI
 */
require('dotenv').config();

module.exports = {
  // Server settings
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // API keys
  apiKey: process.env.API_KEY,
  
  // Paths
  clientBuildPath: '../client/build',
  
  // CORS settings
  corsOrigins: process.env.CORS_ORIGINS || '*',
  
  // Rate limiting (future implementation)
  rateLimit: {
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100 // limit each IP to 100 requests per windowMs
  }
};