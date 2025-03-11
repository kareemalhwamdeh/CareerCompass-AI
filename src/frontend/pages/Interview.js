import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  CircularProgress,
  Card,
  CardContent,
  Rating
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';

function Interview() {
  const [jobTitle, setJobTitle] = useState('');
  const [interviewType, setInterviewType] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [interviewHistory, setInterviewHistory] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleStartInterview = () => {
    setLoading(true);
    // Simulate API call to get first question
    setTimeout(() => {
      setCurrentQuestion({
        id: 1,
        text: "Tell me about your background and experience relevant to this position."
      });
      setIsInterviewActive(true);
      setLoading(false);
    }, 1500);
  };

  const handleEndInterview = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmEnd = () => {
    setIsInterviewActive(false);
    setOpenDialog(false);
    generateFeedback();
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    // In a real app, this would start audio recording
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    // In a real app, this would stop audio recording and process it
    // For now, we'll just submit the typed answer
    submitAnswer();
  };

  const handleAnswerChange = (event) => {
    setCurrentAnswer(event.target.value);
  };

  const submitAnswer = () => {
    if (currentAnswer.trim() === '') return;

    const newInterviewItem = {
      question: currentQuestion,
      answer: currentAnswer,
      feedback: {
        rating: Math.floor(Math.random() * 3) + 3, // Random rating 3-5 for demo
        strengths: ['Good clarity', 'Relevant example provided'],
        improvements: ['Could be more concise', 'Add more specific metrics']
      }
    };

    setInterviewHistory([...interviewHistory, newInterviewItem]);
    setCurrentAnswer('');
    
    // Get next question
    setLoading(true);
    setTimeout(() => {
      if (interviewHistory.length < 4) {
        const nextQuestions = [
          "Describe a challenging situation you faced at work and how you resolved it.",
          "What are your greatest strengths and how would they help you in this role?",
          "Where do you see yourself in 5 years?",
          "Why are you interested in working for our company?"
        ];
        
        setCurrentQuestion({
          id: interviewHistory.length + 2,
          text: nextQuestions[interviewHistory.length]
        });
      } else {
        setCurrentQuestion(null);
        setIsInterviewActive(false);
        generateFeedback();
      }
      setLoading(false);
    }, 1500);
  };

  const generateFeedback = () => {
    setLoading(true);
    setTimeout(() => {
      setFeedback({
        overallScore: 78,
        strengths: [
          'Good communication skills',
          'Clear and structured answers',
          'Relevant examples provided'
        ],
        improvements: [
          'Be more concise in some answers',
          'Provide more quantifiable achievements',
          'Improve storytelling structure (STAR method)'
        ],
        keyInsights: [
          'You did well in behavioral questions',
          'Technical answers could be more detailed',
          'Good job highlighting your skills'
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        AI Mock Interview Simulator
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Practice for your job interviews with our AI interviewer and get instant feedback.
      </Typography>

      {!isInterviewActive && !feedback ? (
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Set Up Your Interview
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Job Title"
                variant="outlined"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g. Software Engineer"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Interview Type</InputLabel>
                <Select
                  value={interviewType}
                  label="Interview Type"
                  onChange={(e) => setInterviewType(e.target.value)}
                >
                  <MenuItem value="behavioral">Behavioral</MenuItem>
                  <MenuItem value="technical">Technical</MenuItem>
                  <MenuItem value="mixed">Mixed</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Experience Level</InputLabel>
                <Select
                  value={experienceLevel}
                  label="Experience Level"
                  onChange={(e) => setExperienceLevel(e.target.value)}
                >
                  <MenuItem value="entry">Entry Level</MenuItem>
                  <MenuItem value="mid">Mid Level</MenuItem>
                  <MenuItem value="senior">Senior Level</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleStartInterview}
                  disabled={!jobTitle || !interviewType || !experienceLevel}
                  startIcon={<PlayArrowIcon />}
                >
                  Start Interview
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ) : loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
          <CircularProgress />
        </Box>
      ) : isInterviewActive ? (
        <Box>
          <Paper elevation={3} sx={{ p: 4, mb: 4, position: 'relative' }}>
            {currentQuestion && (
              <>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    Question {currentQuestion.id}:
                  </Typography>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {currentQuestion.text}
                  </Typography>
                </Box>
                
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  variant="outlined"
                  label="Your Answer"
                  value={currentAnswer}
                  onChange={handleAnswerChange}
                  placeholder="Type your answer here or use the microphone to record..."
                  disabled={isRecording}
                  sx={{ mb: 3 }}
                />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    {!isRecording ? (
                      <Button
                        variant="contained"
                        startIcon={<MicIcon />}
                        onClick={handleStartRecording}
                        color="secondary"
                      >
                        Start Recording
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        startIcon={<StopIcon />}
                        onClick={handleStopRecording}
                        color="error"
                      >
                        Stop Recording
                      </Button>
                    )}
                  </Box>
                  <Box>
                    <Button
                      variant="outlined"
                      onClick={handleEndInterview}
                      sx={{ mr: 2 }}
                    >
                      End Interview
                    </Button>
                    <Button
                      variant="contained"
                      onClick={submitAnswer}
                      disabled={currentAnswer.trim() === '' || isRecording}
                    >
                      Submit Answer
                    </Button>
                  </Box>
                </Box>
              </>
            )}
          </Paper>
          
          {interviewHistory.length > 0 && (
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Interview Progress
              </Typography>
              <List>
                {interviewHistory.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem alignItems="flex-start">
                      <ListItemIcon>
                        <QuestionAnswerIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={<Typography variant="subtitle1" fontWeight="bold">{item.question.text}</Typography>}
                        secondary={
                          <Box sx={{ mt: 1 }}>
                            <Typography variant="body2" color="text.primary" paragraph>
                              {item.answer}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                              <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                                Answer Rating:
                              </Typography>
                              <Rating
                                value={item.feedback.rating}
                                readOnly
                                size="small"
                              />
                            </Box>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < interviewHistory.length - 1 && <Divider variant="inset" component="li" />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          )}
        </Box>
      ) : feedback ? (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h5" gutterBottom>Interview Feedback Summary</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="body1">Overall Score: </Typography>
                <Typography 
                  variant="h5" 
                  color={feedback.overallScore > 70 ? 'success.main' : feedback.overallScore > 50 ? 'warning.main' : 'error.main'}
                  sx={{ ml: 1 }}
                >
                  {feedback.overallScore}/100
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" color="success.main" gutterBottom>
                  Strengths
                </Typography>
                <List>
                  {feedback.strengths.map((strength, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary={strength} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" color="error.main" gutterBottom>
                  Areas for Improvement
                </Typography>
                <List>
                  {feedback.improvements.map((improvement, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <StarIcon color="warning" />
                      </ListItemIcon>
                      <ListItemText primary={improvement} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" color="primary.main" gutterBottom>
                  Key Insights
                </Typography>
                <List>
                  {feedback.keyInsights.map((insight, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <StarIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={insight} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setFeedback(null);
                  setInterviewHistory([]);
                  setCurrentQuestion(null);
                  setCurrentAnswer('');
                }}
              >
                Start New Interview
              </Button>
            </Box>
          </Grid>
        </Grid>
      ) : null}
      
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>End Interview?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to end this interview? Your progress will be saved and you'll receive feedback on your performance so far.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleConfirmEnd} color="primary">
            End Interview
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Interview;