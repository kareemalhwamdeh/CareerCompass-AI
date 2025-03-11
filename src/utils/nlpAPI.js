const axios = require('axios');

/**
 * Analyze a resume using AI
 * @param {string} resumeText - The text content of the resume
 * @param {string} jobDescription - Optional job description to tailor feedback
 * @returns {Promise<object>} Resume analysis results
 */
async function analyzeResume(resumeText, jobDescription = '') {
  try {
    const response = await callNLPAPI({
      prompt: createResumeAnalysisPrompt(resumeText, jobDescription),
      max_tokens: 1000
    });
    
    return response;
  } catch (error) {
    console.error('Error in analyzeResume:', error);
    throw error;
  }
}

/**
 * Generate interview questions based on resume and job description
 * @param {string} resumeText - The text content of the resume
 * @param {string} jobDescription - The job description
 * @param {string} questionType - Type of questions (behavioral, technical, etc.)
 * @returns {Promise<object>} Generated interview questions
 */
async function generateInterviewQuestions(resumeText, jobDescription, questionType = 'mixed') {
  try {
    const response = await callNLPAPI({
      prompt: createQuestionGenerationPrompt(resumeText, jobDescription, questionType),
      max_tokens: 1000
    });
    
    return response;
  } catch (error) {
    console.error('Error in generateInterviewQuestions:', error);
    throw error;
  }
}

/**
 * Conduct a mock interview and provide feedback
 * @param {string} resumeText - The text content of the resume
 * @param {string} jobDescription - The job description
 * @param {string} userResponse - User's answer to the interview question
 * @param {string} questionContext - The question that was asked
 * @returns {Promise<object>} Feedback on the user's response
 */
async function conductMockInterview(resumeText, jobDescription, userResponse, questionContext) {
  try {
    const response = await callNLPAPI({
      prompt: createMockInterviewPrompt(resumeText, jobDescription, userResponse, questionContext),
      max_tokens: 1000
    });
    
    return response;
  } catch (error) {
    console.error('Error in conductMockInterview:', error);
    throw error;
  }
}

/**
 * Call the AI API with the given parameters
 * @param {object} params - API call parameters
 * @returns {Promise<object>} API response
 */
async function callNLPAPI(params) {
  try {
    // API integration
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error('API_KEY not found in environment variables');
    }
    
    const response = await axios.post('https://api.example.com/v1/messages', {
      model: "llm-model-latest",
      max_tokens: params.max_tokens || 1000,
      messages: [
        {
          role: "user",
          content: params.prompt
        }
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'api-version': '2023-06-01'
      }
    });
    
    return response.data.content[0].text;
  } catch (error) {
    console.error('Error calling API:', error.response?.data || error.message);
    throw error;
  }
}

/**
 * Create a prompt for resume analysis
 * @param {string} resumeText - The text content of the resume
 * @param {string} jobDescription - Optional job description
 * @returns {string} Formatted prompt
 */
function createResumeAnalysisPrompt(resumeText, jobDescription) {
  return `
You are an expert resume reviewer with years of experience in helping job seekers improve their resumes.
Please analyze the following resume ${jobDescription ? 'for a role described as: ' + jobDescription : ''}:

${resumeText}

Provide detailed feedback on:
1. Overall structure and clarity
2. ATS optimization
3. Impact statements and quantifiable achievements
4. Industry-specific improvements
5. Keyword optimization
6. Formatting and presentation
7. Specific suggestions for improvement with examples

Structure your response with clear headings and actionable advice.
`;
}

/**
 * Create a prompt for generating interview questions
 * @param {string} resumeText - The text content of the resume
 * @param {string} jobDescription - The job description
 * @param {string} questionType - Type of questions to generate
 * @returns {string} Formatted prompt
 */
function createQuestionGenerationPrompt(resumeText, jobDescription, questionType) {
  let typeSpecificInstructions = '';
  
  switch (questionType.toLowerCase()) {
    case 'behavioral':
      typeSpecificInstructions = `
Generate 5-7 behavioral interview questions that follow the STAR method (Situation, Task, Action, Result).
Focus on leadership, teamwork, conflict resolution, and problem-solving scenarios.
`;
      break;
    case 'technical':
      typeSpecificInstructions = `
Generate 5-7 technical interview questions that assess the candidate's technical skills.
Include coding problems, system design questions, and technical concept explanations.
`;
      break;
    case 'mixed':
    default:
      typeSpecificInstructions = `
Generate 8-10 mixed interview questions including:
- 3-4 behavioral questions following the STAR method
- 3-4 technical questions related to the job requirements
- 1-2 questions about career goals and company fit
`;
      break;
  }
  
  return `
You are an expert technical interviewer with experience in conducting interviews for tech companies.
Based on the following resume and job description, generate appropriate interview questions.

Resume:
${resumeText}

Job Description:
${jobDescription}

${typeSpecificInstructions}

For each question, provide:
1. The question itself
2. Why this question is relevant based on the resume/job description
3. What a good answer might include
`;
}

/**
 * Create a prompt for mock interview feedback
 * @param {string} resumeText - The text content of the resume
 * @param {string} jobDescription - The job description
 * @param {string} userResponse - User's answer to the interview question
 * @param {string} questionContext - The question that was asked
 * @returns {string} Formatted prompt
 */
function createMockInterviewPrompt(resumeText, jobDescription, userResponse, questionContext) {
  return `
You are an expert technical interviewer with experience in conducting interviews for tech companies.
You're providing feedback on a candidate's response to an interview question.

Resume:
${resumeText}

Job Description:
${jobDescription}

Question Asked:
${questionContext}

Candidate's Response:
${userResponse}

Please provide constructive feedback on the candidate's response, including:
1. Strengths of the response
2. Areas for improvement
3. How well it addresses the question
4. Communication clarity and structure
5. Technical accuracy (if applicable)
6. Suggested improvements with examples

Be honest but supportive in your feedback, focusing on how the candidate can improve.
`;
}

module.exports = {
  analyzeResume,
  generateInterviewQuestions,
  conductMockInterview
};// API integration
