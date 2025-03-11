import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Resume & Interview Prep
            </Typography>
            <Typography variant="body2" color="text.secondary">
              AI-powered tools to enhance your resume and prepare for interviews
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block">Home</Link>
            <Link href="/resume" color="inherit" display="block">Resume Builder</Link>
            <Link href="/interview" color="inherit" display="block">Mock Interviews</Link>
            <Link href="/dashboard" color="inherit" display="block">Dashboard</Link>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              For support or inquiries, please visit our GitHub page.
            </Typography>
            <Link 
              href="https://github.com/kareemalhwamdeh/Resume-Interview-Prep"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              GitHub Repository
            </Link>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' Resume & Interview Prep. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;