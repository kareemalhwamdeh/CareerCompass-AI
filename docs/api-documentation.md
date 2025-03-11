# API Documentation
### Author: Kareem Alhwamdeh

## Base URL

All API endpoints are relative to: `https://your-api-domain.com/api/`

For local development: `http://localhost:3000/api/`

## Authentication (Planned)

Most endpoints will require authentication using a JWT token.

Include the token in the Authorization header:

```
Authorization: Bearer <your_token>
```

## Endpoints

### Resume Analysis

#### Analyze Resume

```
POST /analyze-resume
```

Analyzes a resume and provides structured feedback.

**Request Body:**

```json
{
  "resumeText": "Full text of the resume...",
  "jobDescription": "Optional job description for tailored feedback..."
}
```

**Response:**

```json
{
  "analysis": "Detailed analysis of the resume with structured feedback..."
}
```

**Status Codes:**

- `200 OK`: Analysis completed successfully
- `400 Bad Request`: Missing required fields
- `500 Internal Server Error`: Error processing request

### Interview Preparation

#### Generate Interview Questions

```
POST /generate-questions
```

Generates tailored interview questions based on the resume and job description.

**Request Body:**

```json
{
  "resumeText": "Full text of the resume...",
  "jobDescription": "Job description text...",
  "questionType": "behavioral|technical|mixed"
}
```

**Response:**

```json
{
  "questions": [
    {
      "question": "Question text...",
      "context": "Why this question is relevant...",
      "goodAnswer": "What a good answer might include..."
    },
    // Additional questions...
  ]
}
```

**Status Codes:**

- `200 OK`: Questions generated successfully
- `400 Bad Request`: Missing required fields
- `500 Internal Server Error`: Error processing request

#### Mock Interview

```
POST /mock-interview
```

Conducts a mock interview by providing feedback on user's answer to a question.

**Request Body:**

```json
{
  "resumeText": "Full text of the resume...",
  "jobDescription": "Job description text...",
  "userResponse": "User's answer to the interview question...",
  "questionContext": "The interview question that was asked..."
}
```

**Response:**

```json
{
  "feedback": "Detailed feedback on the user's response..."
}
```

**Status Codes:**

- `200 OK`: Feedback provided successfully
- `400 Bad Request`: Missing required fields
- `500 Internal Server Error`: Error processing request

## Error Responses

All error responses follow this format:

```json
{
  "error": "Error message describing the issue"
}
```

## Rate Limiting (Planned)

API requests are limited to 100 requests per hour per user.

Rate limit information is returned in the headers:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1620000000
```

## Versioning

The API version is specified in the URL:

```
/api/v1/endpoint
```

Current version: v1