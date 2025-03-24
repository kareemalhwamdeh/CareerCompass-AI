# CareerCompass AI - Setup Guide

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/CareerCompass-AI.git
cd CareerCompass-AI
```

### Install dependencies

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### Environment Setup

1. Create a `.env` file in the root directory using the provided example:

```bash
cp .env.example .env
```

2. Edit the `.env` file and add your API key:

```
API_KEY=your_api_key_here
```

## Running the Application

### Development Mode

To run both the client and server in development mode:

```bash
npm run dev
```

This will start:
- The backend server at http://localhost:3001
- The frontend React app at http://localhost:3000

### Running Server Only

```bash
npm run server
```

### Running Client Only

```bash
npm run client
```

## Building for Production

To build the client application for production:

```bash
npm run build
```

To run the production version:

```bash
npm start
```

## API Testing

The API endpoints can be tested using tools like Postman or curl:

```bash
# Example: Test the resume analysis endpoint
curl -X POST http://localhost:3001/api/analyze-resume \
  -H "Content-Type: application/json" \
  -d '{"resumeText": "Your resume text here", "jobDescription": "Optional job description"}'
```

## Troubleshooting

- If you encounter CORS issues, check that your `.env` file has the correct CORS_ORIGINS setting
- If API calls fail, verify that your API_KEY is correctly set in the `.env` file
- For client connection issues, ensure the server is running on port 3001