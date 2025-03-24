import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Resume from './pages/Resume';
import Interview from './pages/Interview';
import Dashboard from './pages/Dashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

// Simple Home Page Component
function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          CareerCompass AI
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Boost your job search with AI-powered tools
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            component={RouterLink}
            to="/resume"
          >
            Improve My Resume
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            size="large"
            component={RouterLink}
            to="/interview"
          >
            Practice Interviews
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

// Main App Component
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Box sx={{ minHeight: 'calc(100vh - 120px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={
              <Container sx={{ textAlign: 'center', mt: 8 }}>
                <Typography variant="h4">Page Not Found</Typography>
                <Button component={RouterLink} to="/" sx={{ mt: 2 }}>Go Home</Button>
              </Container>
            } />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;