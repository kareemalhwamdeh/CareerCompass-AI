import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button
} from '@mui/material';

function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Your Dashboard
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Track your progress and manage your resume and interview preparations.
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Resume Progress
              </Typography>
              <Typography variant="body1" paragraph>
                You have 1 resume stored. Your latest resume has a match score of 75% for Software Developer positions.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View Resume
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Interview Practice
              </Typography>
              <Typography variant="body1" paragraph>
                You've completed 2 mock interviews. Your average performance score is 78%.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View History
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
            <Typography variant="h5" gutterBottom>
              Upcoming Interviews
            </Typography>
            <Typography variant="body1" color="text.secondary">
              No upcoming interviews scheduled. Practice a mock interview to prepare for your next opportunity.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary">
                Schedule Practice Interview
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;