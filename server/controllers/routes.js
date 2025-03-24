const express = require('express');
const { analyzeResume, generateInterviewQuestions, conductMockInterview } = require('../utils/nlpAPI');

const router = express.Router();

// Resume analysis endpoint
router.post('/analyze-resume', async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;
    if (!resumeText) {
      return res.status(400).json({ error: 'Resume text is required' });
    }
    
    const analysis = await analyzeResume(resumeText, jobDescription);
    res.json({ analysis });
  } catch (error) {
    console.error('Error analyzing resume:', error);
    res.status(500).json({ error: 'Failed to analyze resume' });
  }
});

// Generate interview questions endpoint
router.post('/generate-questions', async (req, res) => {
  try {
    const { resumeText, jobDescription, questionType } = req.body;
    if (!resumeText || !jobDescription) {
      return res.status(400).json({ error: 'Resume text and job description are required' });
    }
    
    const questions = await generateInterviewQuestions(resumeText, jobDescription, questionType);
    res.json({ questions });
  } catch (error) {
    console.error('Error generating interview questions:', error);
    res.status(500).json({ error: 'Failed to generate interview questions' });
  }
});

// Mock interview endpoint
router.post('/mock-interview', async (req, res) => {
  try {
    const { resumeText, jobDescription, userResponse, questionContext } = req.body;
    if (!userResponse || !questionContext) {
      return res.status(400).json({ error: 'User response and question context are required' });
    }
    
    const feedback = await conductMockInterview(resumeText, jobDescription, userResponse, questionContext);
    res.json({ feedback });
  } catch (error) {
    console.error('Error conducting mock interview:', error);
    res.status(500).json({ error: 'Failed to conduct mock interview' });
  }
});

module.exports = router;