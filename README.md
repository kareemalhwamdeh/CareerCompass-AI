# CareerCompass AI
### Author: Kareem Alhwamdeh

A web-based application that helps job seekers improve their resumes and prepare for technical and behavioral interviews using advanced NLP techniques.

## Features

- **Resume Analysis**: Detailed feedback on structure, clarity, and ATS optimization
- **Interview Questions**: Tailored behavioral and technical questions based on job role
- **Mock Interviews**: AI-powered practice interviews with real-time feedback
- **Personalized Recommendations**: Industry-specific improvements and keyword enhancements

## Tech Stack

- **Backend**: Node.js with Express.js
- **NLP Integration**: Advanced language processing for intelligent analysis
- **Frontend**: React.js with Material UI
- **Database**: MongoDB/PostgreSQL (planned)

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/kareemalhwamdeh/Resume-Interview-Prep.git
   cd Resume-Interview-Prep
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   ```
   cp .env.example .env
   ```
   Then edit `.env` file with your API key.

4. Start the development servers:
   
   For backend and frontend concurrently:
   ```
   npm run dev
   ```
   
   Or separately:
   ```
   # Terminal 1: Backend server (API) - runs on port 3001
   npm run dev:backend
   
   # Terminal 2: Frontend development server - runs on port 3000
   npm run dev:frontend
   ```

5. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001/api

## Deployment

### Deploying to Render.com (Free)

1. Fork this repository to your GitHub account.

2. Sign up for a free [Render.com](https://render.com/) account.

3. Create a new Web Service:
   - Connect your GitHub repository
   - Use the following settings:
     - **Name**: career-compass-ai (or your preferred name)
     - **Environment**: Node
     - **Build Command**: `npm install && ./setup-frontend.sh && ./build-frontend.sh`
     - **Start Command**: `NODE_ENV=production node src/backend/server.js`

4. Add environment variables:
   - Add `API_KEY` with your actual API key value

5. Deploy the service.

6. Once deployed, your application will be accessible at `https://your-app-name.onrender.com`

## Roadmap

- Implement user authentication
- Add database for storing user profiles and resume history
- Support PDF resume uploads with text extraction
- Add voice-enabled mock interviews with real-time speech recognition
- Implement AI-generated resume builder
- Add integration with job search APIs
