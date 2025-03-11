import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Card,
  CardContent,
  LinearProgress,
  Stack
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dashboard-tabpanel-${index}`}
      aria-labelledby={`dashboard-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `dashboard-tab-${index}`,
    'aria-controls': `dashboard-tabpanel-${index}`,
  };
}

function Dashboard() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Mock data for dashboard
  const resumeData = {
    latestScore: 78,
    improvement: 12,
    submissions: [
      { id: 1, date: '2025-03-08', jobTitle: 'Software Engineer', score: 78, status: 'Completed' },
      { id: 2, date: '2025-03-02', jobTitle: 'Frontend Developer', score: 66, status: 'Completed' },
      { id: 3, date: '2025-02-22', jobTitle: 'Full Stack Developer', score: 72, status: 'Completed' }
    ],
    skillStrengths: [
      { skill: 'Technical Skills', score: 85 },
      { skill: 'Experience', score: 72 },
      { skill: 'Education', score: 90 },
      { skill: 'Achievements', score: 68 },
      { skill: 'Resume Format', score: 80 }
    ]
  };

  const interviewData = {
    totalInterviews: 4,
    averageScore: 72,
    latestScore: 78,
    improvement: 8,
    interviews: [
      { id: 1, date: '2025-03-09', jobTitle: 'Software Engineer', type: 'Technical', score: 78, status: 'Completed' },
      { id: 2, date: '2025-03-05', jobTitle: 'Frontend Developer', type: 'Behavioral', score: 74, status: 'Completed' },
      { id: 3, date: '2025-02-28', jobTitle: 'Full Stack Developer', type: 'Mixed', score: 70, status: 'Completed' },
      { id: 4, date: '2025-02-24', jobTitle: 'Web Developer', type: 'Technical', score: 66, status: 'Completed' }
    ],
    skillBreakdown: [
      { skill: 'Technical Knowledge', score: 75 },
      { skill: 'Communication', score: 82 },
      { skill: 'Problem Solving', score: 70 },
      { skill: 'Experience Examples', score: 68 },
      { skill: 'Culture Fit', score: 78 }
    ]
  };

  const upcomingInterviews = [
    { id: 1, company: 'Tech Solutions Inc.', position: 'Senior Software Engineer', date: '2025-03-15', time: '10:00 AM' },
    { id: 2, company: 'Digital Innovations', position: 'Frontend Developer', date: '2025-03-20', time: '2:30 PM' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Your Progress Dashboard
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Track your resume and interview improvements over time
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%',
              borderTop: '4px solid',
              borderColor: 'primary.main'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <DescriptionIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
              <Typography variant="h6" component="h2">
                Resume Score
              </Typography>
            </Box>
            <Typography variant="h3" component="p" sx={{ mb: 1, fontWeight: 'bold' }}>
              {resumeData.latestScore}%
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TrendingUpIcon color="success" />
              <Typography variant="body2" color="success.main" sx={{ ml: 0.5 }}>
                +{resumeData.improvement}% Improvement
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%',
              borderTop: '4px solid',
              borderColor: 'secondary.main'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <QuestionAnswerIcon color="secondary" sx={{ mr: 1, fontSize: 28 }} />
              <Typography variant="h6" component="h2">
                Interview Score
              </Typography>
            </Box>
            <Typography variant="h3" component="p" sx={{ mb: 1, fontWeight: 'bold' }}>
              {interviewData.latestScore}%
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TrendingUpIcon color="success" />
              <Typography variant="body2" color="success.main" sx={{ ml: 0.5 }}>
                +{interviewData.improvement}% Improvement
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%',
              borderTop: '4px solid',
              borderColor: 'error.main'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CalendarTodayIcon color="error" sx={{ mr: 1, fontSize: 28 }} />
              <Typography variant="h6" component="h2">
                Upcoming Interviews
              </Typography>
            </Box>
            <Typography variant="h3" component="p" sx={{ mb: 1, fontWeight: 'bold' }}>
              {upcomingInterviews.length}
            </Typography>
            <Button 
              variant="outlined" 
              color="primary" 
              size="small"
              component={RouterLink}
              to="/interview"
            >
              Practice Now
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Tabs for detailed information */}
      <Paper elevation={2} sx={{ mb: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            aria-label="dashboard tabs"
            variant="fullWidth"
          >
            <Tab label="Resume Progress" icon={<DescriptionIcon />} iconPosition="start" {...a11yProps(0)} />
            <Tab label="Interview Progress" icon={<QuestionAnswerIcon />} iconPosition="start" {...a11yProps(1)} />
            <Tab label="Upcoming Interviews" icon={<CalendarTodayIcon />} iconPosition="start" {...a11yProps(2)} />
          </Tabs>
        </Box>
        
        {/* Resume Tab */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Resume Submission History
              </Typography>
              <Paper variant="outlined" sx={{ mb: 3 }}>
                <List>
                  {resumeData.submissions.map((submission, index) => (
                    <React.Fragment key={submission.id}>
                      <ListItem>
                        <Grid container spacing={2}>
                          <Grid item xs={7}>
                            <ListItemText 
                              primary={submission.jobTitle} 
                              secondary={`Submitted: ${submission.date}`} 
                            />
                          </Grid>
                          <Grid item xs={5} sx={{ textAlign: 'right' }}>
                            <Typography 
                              variant="body1" 
                              color={submission.score > 70 ? 'success.main' : 'warning.main'}
                              sx={{ fontWeight: 'bold' }}
                            >
                              {submission.score}%
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {submission.status}
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                      {index < resumeData.submissions.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </Paper>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button 
                  variant="contained" 
                  component={RouterLink} 
                  to="/resume"
                >
                  Improve Your Resume
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Resume Skill Breakdown
              </Typography>
              <Card>
                <CardContent>
                  <Stack spacing={2}>
                    {resumeData.skillStrengths.map((skill) => (
                      <Box key={skill.skill}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">{skill.skill}</Typography>
                          <Typography variant="body2" fontWeight="bold">{skill.score}%</Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={skill.score} 
                          color={skill.score > 75 ? "success" : skill.score > 60 ? "primary" : "warning"}
                          sx={{ height: 8, borderRadius: 5, mt: 0.5 }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        
        {/* Interview Tab */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Interview History
              </Typography>
              <Paper variant="outlined" sx={{ mb: 3 }}>
                <List>
                  {interviewData.interviews.map((interview, index) => (
                    <React.Fragment key={interview.id}>
                      <ListItem>
                        <Grid container spacing={2}>
                          <Grid item xs={7}>
                            <ListItemText 
                              primary={interview.jobTitle} 
                              secondary={
                                <React.Fragment>
                                  <Typography variant="caption" display="block">{interview.date}</Typography>
                                  <Typography variant="caption" display="block">{interview.type} Interview</Typography>
                                </React.Fragment>
                              } 
                            />
                          </Grid>
                          <Grid item xs={5} sx={{ textAlign: 'right' }}>
                            <Typography 
                              variant="body1" 
                              color={interview.score > 70 ? 'success.main' : 'warning.main'}
                              sx={{ fontWeight: 'bold' }}
                            >
                              {interview.score}%
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {interview.status}
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                      {index < interviewData.interviews.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </Paper>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button 
                  variant="contained" 
                  component={RouterLink} 
                  to="/interview"
                >
                  Practice Interviews
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Interview Skill Breakdown
              </Typography>
              <Card>
                <CardContent>
                  <Stack spacing={2}>
                    {interviewData.skillBreakdown.map((skill) => (
                      <Box key={skill.skill}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">{skill.skill}</Typography>
                          <Typography variant="body2" fontWeight="bold">{skill.score}%</Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={skill.score} 
                          color={skill.score > 75 ? "success" : skill.score > 60 ? "primary" : "warning"}
                          sx={{ height: 8, borderRadius: 5, mt: 0.5 }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        
        {/* Upcoming Interviews Tab */}
        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Scheduled Interviews
              </Typography>
              {upcomingInterviews.length > 0 ? (
                <Paper variant="outlined">
                  <List>
                    {upcomingInterviews.map((interview, index) => (
                      <React.Fragment key={interview.id}>
                        <ListItem>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={1}>
                              <WorkIcon fontSize="large" color="primary" />
                            </Grid>
                            <Grid item xs={12} sm={7}>
                              <ListItemText 
                                primary={
                                  <Typography variant="h6">{interview.company}</Typography>
                                } 
                                secondary={interview.position} 
                              />
                            </Grid>
                            <Grid item xs={12} sm={3} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                              <Typography variant="body1" fontWeight="bold">
                                {interview.date}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {interview.time}
                              </Typography>
                            </Grid>
                            <Grid item xs={12} sm={1} sx={{ textAlign: 'right' }}>
                              <Button 
                                variant="outlined" 
                                size="small"
                                component={RouterLink}
                                to="/interview"
                              >
                                Practice
                              </Button>
                            </Grid>
                          </Grid>
                        </ListItem>
                        {index < upcomingInterviews.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                </Paper>
              ) : (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    You don't have any upcoming interviews scheduled.
                  </Typography>
                  <Button 
                    variant="contained" 
                    component={RouterLink} 
                    to="/interview"
                  >
                    Practice For Your Next Interview
                  </Button>
                </Box>
              )}
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>
    </Container>
  );
}

export default Dashboard;