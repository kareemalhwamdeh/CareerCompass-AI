import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Button, 
  Card, 
  CardContent,
  CardActions,
  CardMedia
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Home() {
  const features = [
    {
      title: 'Resume Builder',
      description: 'Upload your resume for AI-powered analysis and get personalized improvement suggestions to make your resume stand out to employers.',
      icon: <DescriptionIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      link: '/resume'
    },
    {
      title: 'Mock Interviews',
      description: 'Practice for your interviews with our AI interviewer. Get real-time feedback on your answers and tips for improvement.',
      icon: <QuestionAnswerIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      link: '/interview'
    },
    {
      title: 'Progress Dashboard',
      description: 'Track your improvement over time with detailed analytics on your resume and interview performance.',
      icon: <DashboardIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      link: '/dashboard'
    }
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom>
                Boost Your Job Search with AI
              </Typography>
              <Typography variant="h6" paragraph>
                Enhance your resume and ace your interviews with our AI-powered tools. Get personalized feedback and coaching.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  component={RouterLink}
                  to="/resume"
                  sx={{ mr: 2, mb: 2 }}
                >
                  Improve My Resume
                </Button>
                <Button 
                  variant="outlined" 
                  color="inherit" 
                  size="large"
                  component={RouterLink}
                  to="/interview"
                  sx={{ mb: 2 }}
                >
                  Practice Interviews
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: 500,
                  display: 'block',
                  margin: '0 auto'
                }}
                alt="Job search illustration"
                src="https://via.placeholder.com/500x300?text=Resume+and+Interview+Prep"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          How It Works
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
          Our AI-powered platform helps you create the perfect resume and prepare for interviews.
        </Typography>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                  {feature.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" align="center">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    color="primary"
                    component={RouterLink}
                    to={feature.link}
                    sx={{ mx: 'auto', mb: 1 }}
                  >
                    Get Started
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: 'grey.100',
          py: 6,
          mb: 6
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Ready to Land Your Dream Job?
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Start improving your resume and practice for interviews today with our AI-powered tools.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              component={RouterLink}
              to="/resume"
            >
              Get Started Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;