// This is a placeholder for a user model
// In a full implementation, you would use a database like MongoDB with Mongoose
// or PostgreSQL with Sequelize

/**
 * User model schema (example for MongoDB/Mongoose)
 * 
 * Fields:
 * - email: User's email address (unique identifier)
 * - name: User's full name
 * - resumes: Array of resume documents with versions
 * - interviewHistory: Array of past mock interviews and feedback
 * - settings: User preferences
 */

const userSchema = {
  email: String,
  name: String,
  resumes: [
    {
      title: String,
      content: String,
      version: Number,
      targetJob: String,
      feedback: [{
        date: Date,
        analysis: String
      }],
      createdAt: Date,
      updatedAt: Date
    }
  ],
  interviewHistory: [
    {
      date: Date,
      jobTitle: String,
      questions: [{
        question: String,
        answer: String,
        feedback: String
      }]
    }
  ],
  settings: {
    preferredJobSector: String,
    notificationPreferences: Object
  },
  createdAt: Date,
  updatedAt: Date
};

// Example user document
const exampleUser = {
  email: "user@example.com",
  name: "John Doe",
  resumes: [
    {
      title: "Software Engineer Resume",
      content: "Resume content goes here...",
      version: 1,
      targetJob: "Senior Software Engineer",
      feedback: [
        {
          date: new Date(),
          analysis: "Detailed analysis of the resume..."
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  interviewHistory: [
    {
      date: new Date(),
      jobTitle: "Software Engineer",
      questions: [
        {
          question: "Tell me about a time when you had to solve a complex problem.",
          answer: "User's answer...",
          feedback: "Feedback on the answer..."
        }
      ]
    }
  ],
  settings: {
    preferredJobSector: "Technology",
    notificationPreferences: {
      email: true,
      inApp: true
    }
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

module.exports = {
  userSchema,
  exampleUser
};