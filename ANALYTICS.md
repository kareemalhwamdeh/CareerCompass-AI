# Setting Up Analytics for CareerCompass AI
### Author: Kareem Alhwamdeh

This guide explains how to set up analytics to track visitors to your CareerCompass AI application.

## Option 1: Google Analytics (Most Popular)

1. **Create a Google Analytics Account**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Sign in with your Google account
   - Click "Start measuring"
   - Follow setup steps to create an account, property, and data stream
   - You'll receive a Measurement ID starting with "G-" (e.g., G-XXXXXXXXXX)

2. **Replace the Placeholder in index.html**:
   - In `/frontend/public/index.html`, replace `G-XXXXXXXXXX` with your actual Measurement ID in two places:
     ```html
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     </script>
     ```

3. **Deploy the Changes**:
   - Commit and push your changes to GitHub
   - Render.com will automatically redeploy your application

4. **View Analytics**:
   - Analytics data will start appearing in your Google Analytics dashboard
   - It may take up to 24 hours for initial data to appear

## Option 2: Simple Analytics (Privacy-Focused)

If you prefer a simpler, privacy-focused solution:

1. **Create a Simple Analytics Account**:
   - Go to [Simple Analytics](https://simpleanalytics.com/)
   - Sign up for an account (they offer a free trial)
   - Get your tracking script

2. **Add the Script to index.html**:
   - Replace the Google Analytics script with:
     ```html
     <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
     <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" /></noscript>
     ```

## Option 3: Built-in Render.com Analytics

Render.com provides basic traffic metrics for your deployed services:

1. **Access Analytics**:
   - Log in to your Render.com dashboard
   - Select your CareerCompass AI service
   - Click on "Metrics" in the navigation
   - View CPU, memory, and request metrics

2. **What You Can Track**:
   - Request count and response time
   - CPU and memory usage
   - Error rates
   - Status codes

## Setting Up Event Tracking

For more detailed analytics (tracking specific actions like button clicks):

1. **Add Event Tracking Code**:
   ```javascript
   // Example: Track form submissions
   const trackSubmit = () => {
     // For Google Analytics
     gtag('event', 'form_submit', {
       'event_category': 'engagement',
       'event_label': 'resume_analysis'
     });
   }
   ```

2. **Add This to Your Form Submit Handler**:
   ```javascript
   const handleSubmit = (e) => {
     e.preventDefault();
     // Your existing form submission code
     
     // Track the event
     trackSubmit();
   }
   ```

## Next Steps

After setting up analytics, allow it to collect data for at least a week to get meaningful insights about:

1. Number of visitors
2. Traffic sources (where visitors are coming from)
3. User behavior (which pages they visit, how long they stay)
4. Conversion metrics (how many users complete key actions)

You can use these insights to improve your application and highlight its popularity in your portfolio and LinkedIn profile.