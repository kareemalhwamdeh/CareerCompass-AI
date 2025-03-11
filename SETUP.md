# Setup Instructions

Follow these simple steps to set up and run the Resume & Interview Prep application:

## Prerequisites

- Node.js (v16 or later)
- npm (v8 or later)

## Step 1: Install backend dependencies

Run the following command in the project root directory:

```bash
npm install
```

## Step 2: Set up environment variables

Create a `.env` file in the project root directory with the following contents:

```
PORT=3001
API_KEY=your_api_key_here
```

## Step 3: Run the backend server

Start the backend server with:

```bash
npm run dev
```

The backend will start on http://localhost:3001

## Step 4: Set up and run the frontend

In a new terminal window, run:

```bash
npm run setup-frontend
cd frontend
npm start
```

The frontend will start on http://localhost:3000

## Accessing the application

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/api

## Troubleshooting

If you encounter any issues:

1. Make sure both terminals are running (one for backend, one for frontend)
2. Check that the backend is running on port 3001
3. Verify that the frontend is running on port 3000
4. Ensure all dependencies are installed correctly