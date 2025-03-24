import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100]
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' '}
          <Link color="inherit" href="/">
            CareerCompass AI
          </Link>
          {' - All rights reserved to Kareem Alhwamdeh.'}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
          <Link color="inherit" href="https://github.com/kareemalhwamdeh">
            GitHub
          </Link>{' | '}
          <Link color="inherit" href="https://www.linkedin.com/in/kareem-alhwamdeh/">
            LinkedIn
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;