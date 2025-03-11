import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Alert
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Resume() {
  const [activeStep, setActiveStep] = useState(0);
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const steps = ['Upload Resume', 'Add Job Description', 'Review Analysis'];

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setResumeFile(event.target.files[0]);
    }
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleNext = () => {
    if (activeStep === 1) {
      // This would normally call the backend API
      analyzeResume();
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const analyzeResume = () => {
    setLoading(true);
    setError(null);
    
    // Simulating API call
    setTimeout(() => {
      // Mock response data
      const mockAnalysis = {
        score: 75,
        strengths: [
          'Good use of action verbs',
          'Clear presentation of skills',
          'Proper formatting and structure'
        ],
        improvements: [
          'Add more quantifiable achievements',
          'Tailor resume more specifically to the job description',
          'Improve ATS compatibility with more relevant keywords'
        ],
        keywordMatches: 65,
        recommendedSkills: [
          'Project Management',
          'Data Analysis',
          'Team Leadership'
        ]
      };
      
      setAnalysis(mockAnalysis);
      setLoading(false);
      setActiveStep(2);
    }, 2000);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ my: 4, textAlign: 'center' }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 4
              }}
            >
              <CloudUploadIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Upload Your Resume
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Upload your current resume in PDF, DOCX, or TXT format for AI analysis.
              </Typography>
              
              <Box sx={{ width: '100%', mt: 2 }}>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<CloudUploadIcon />}
                  fullWidth
                  sx={{ py: 1.5 }}
                >
                  Choose File
                  <input
                    type="file"
                    hidden
                    accept=".pdf,.docx,.txt"
                    onChange={handleFileChange}
                  />
                </Button>
              </Box>
              
              {resumeFile && (
                <Box sx={{ mt: 2, width: '100%' }}>
                  <Alert severity="success">
                    File uploaded: {resumeFile.name}
                  </Alert>
                </Box>
              )}
            </Paper>
          </Box>
        );
      
      case 1:
        return (
          <Box sx={{ my: 4 }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                mb: 4
              }}
            >
              <Typography variant="h5" component="h2" gutterBottom>
                Add Job Description
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Paste the job description you're applying for to help our AI tailor your resume analysis.
              </Typography>
              
              <TextField
                label="Job Description"
                multiline
                rows={8}
                variant="outlined"
                fullWidth
                value={jobDescription}
                onChange={handleJobDescriptionChange}
                placeholder="Paste the full job description here..."
                sx={{ mb: 2 }}
              />
            </Paper>
          </Box>
        );
      
      case 2:
        return (
          <Box sx={{ my: 4 }}>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <CircularProgress />
              </Box>
            ) : error ? (
              <Alert severity="error" sx={{ mb: 4 }}>
                {error}
              </Alert>
            ) : analysis && (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                    <Typography variant="h5" gutterBottom>Resume Analysis Results</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="body1">Match Score: </Typography>
                      <Typography 
                        variant="h5" 
                        color={analysis.score > 70 ? 'success.main' : analysis.score > 50 ? 'warning.main' : 'error.main'}
                        sx={{ ml: 1 }}
                      >
                        {analysis.score}%
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      Keyword Match Rate: {analysis.keywordMatches}%
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                    <Typography variant="h6" color="success.main" gutterBottom>
                      Strengths
                    </Typography>
                    <List>
                      {analysis.strengths.map((strength, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <CheckCircleIcon color="success" />
                          </ListItemIcon>
                          <ListItemText primary={strength} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                    <Typography variant="h6" color="error.main" gutterBottom>
                      Areas for Improvement
                    </Typography>
                    <List>
                      {analysis.improvements.map((improvement, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <ErrorIcon color="error" />
                          </ListItemIcon>
                          <ListItemText primary={improvement} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
                
                <Grid item xs={12}>
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Recommended Skills to Highlight
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      {analysis.recommendedSkills.map((skill, index) => (
                        <Box 
                          key={index}
                          sx={{ 
                            bgcolor: 'primary.light', 
                            color: 'white',
                            py: 1,
                            px: 2,
                            borderRadius: 1
                          }}
                        >
                          {skill}
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Grid>
                
                <Grid item xs={12}>
                  <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Button 
                      variant="contained" 
                      color="primary"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                    >
                      Generate Improved Resume
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Box>
        );
      
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Resume Analyzer & Enhancer
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Use our AI-powered tool to analyze your resume and get personalized recommendations.
      </Typography>
      
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      {renderStepContent(activeStep)}
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="outlined"
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={(activeStep === 0 && !resumeFile) || (activeStep === 1 && !jobDescription)}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Container>
  );
}

export default Resume;