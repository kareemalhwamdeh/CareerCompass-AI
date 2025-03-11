# CareerCompass AI

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

## Roadmap

- Implement user authentication
- Add database for storing user profiles and resume history
- Support PDF resume uploads with text extraction
- Add voice-enabled mock interviews with real-time speech recognition
- Implement AI-generated resume builder
- Add integration with job search APIs