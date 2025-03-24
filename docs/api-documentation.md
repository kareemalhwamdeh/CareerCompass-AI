# CareerCompass AI - API Documentation
### Author: Kareem Alhwamdeh

## Base URL

All API endpoints are relative to: `/api`

For local development: `http://localhost:3001/api`

## Authentication (Planned)

Authentication will be implemented in a future release. Currently, all endpoints are publicly accessible.

## Endpoints

### Resume Analysis

```
POST /analyze-resume
```

Analyzes a resume and provides structured feedback.

**Request Body:**

```json
{
  "resumeText": "Full text of the resume (required)",
  "jobDescription": "Optional job description for tailored feedback"
}
```

**Response:**

```json
{
  "analysis": {
    "score": 75,
    "strengths": ["Good use of action verbs", "Clear presentation of skills"],
    "improvements": ["Add more quantifiable achievements"],
    "keywordMatches": 65,
    "recommendedSkills": ["Project Management", "Data Analysis"]
  }
}
```

**Status Codes:**

- `200 OK`: Analysis completed successfully
- `400 Bad Request`: Missing required fields
- `500 Internal Server Error`: Error processing request

### Generate Interview Questions

```
POST /generate-questions
```

Generates tailored interview questions based on the resume and job description.

**Request Body:**

```json
{
  "resumeText": "Full text of the resume (required)",
  "jobDescription": "Job description text (required)",
  "questionType": "behavioral|technical|mixed (optional, default: mixed)"
}
```

**Response:**

```json
{
  "questions": [
    {
      "question": "Tell me about a time you had to solve a complex problem.",
      "relevance": "Based on your project experience at Company X",
      "goodAnswerTips": "Use the STAR method, focus on your specific contribution"
    }
    // Additional questions...
  ]
}
```

**Status Codes:**

- `200 OK`: Questions generated successfully
- `400 Bad Request`: Missing required fields
- `500 Internal Server Error`: Error processing request

### Mock Interview

```
POST /mock-interview
```

Provides feedback on a user's interview response.

**Request Body:**

```json
{
  "resumeText": "Full text of the resume (optional)",
  "jobDescription": "Job description text (optional)",
  "userResponse": "User's answer to the interview question (required)",
  "questionContext": "The interview question that was asked (required)"
}
```

**Response:**

```json
{
  "feedback": {
    "strengths": ["Good communication clarity", "Relevant example provided"],
    "improvements": ["Could be more concise", "Add specific metrics"],
    "rating": 4,
    "suggestions": "Consider using the STAR method to structure your response"
  }
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

API rate limiting will be implemented in a future release.

## Data Retention

User-submitted data is not currently stored beyond the session. Future releases with authentication will include data retention policies.