import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Aiesec from './components/Aiesec';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff9f',
    },
    secondary: {
      main: '#ff0266',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#e6f1ff',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: "'Fira Code', 'Roboto Mono', monospace",
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.5px',
    },
    h5: {
      fontFamily: "'Roboto Mono', monospace",
      fontWeight: 400,
    },
    body1: {
      fontSize: '1.1rem',
      letterSpacing: '-0.5px',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#112240',
          borderRadius: '8px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 30px -15px rgba(0, 255, 159, 0.2)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          fontSize: '1rem',
          fontFamily: "'Fira Code', 'Roboto Mono', monospace",
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 159, 0.1)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Box sx={{ paddingTop: '64px' }}>  {/* Adjust padding to account for the navbar height */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/aiesec' element={<Aiesec />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/certificates' element={<Certificates />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
