# CareerCompass AI - Project Architecture
### Author: Kareem Alhwamdeh

## System Overview

CareerCompass AI is a modern web application with a clear separation between the frontend and backend components.

```
  +----------------+   +----------------+   +--------------+
  |                |   |                |   |              |
  |  React Client  |-->| Express Server |-->|   NLP API    |
  |                |<--|                |<--|              |
  +----------------+   +----------------+   +--------------+
                              |
                              v
                       +----------------+
                       |                |
                       |    Database    |
                       |   (Planned)    |
                       |                |
                       +----------------+
```

## Component Details

### Server (Node.js/Express)

- **server.js**: Entry point for the application, configures Express
- **controllers/routes.js**: Defines API endpoints and routing logic
- **utils/nlpAPI.js**: Handles communication with NLP processing API
- **models/**: Database models (planned)

### Client (React.js)

- **components/**: Reusable UI components (Navbar, Footer, etc.)
- **pages/**: Page-level components (Resume, Interview, Dashboard)
- **services/**: API communication with the backend (planned)

### Database (Planned)

- User profiles
- Resume storage
- Interview history
- Feedback records

## Data Flow

1. User submits resume or interview response via client
2. Client sends request to Express server
3. Server processes request and calls NLP API
4. NLP processing analyzes the content and returns insights
5. Server formats the response and sends it back to client
6. Client displays results to the user

## Authentication Flow (Planned)

1. User registers/logs in via client
2. Authentication service verifies credentials
3. JWT token issued to authenticated users
4. Token used for subsequent API requests
5. Protected routes require valid token

## Scalability Considerations

- Stateless architecture allows for horizontal scaling
- Caching layer can be added for frequent queries
- API rate limiting for NLP API usage
- Database sharding for user data as the application grows