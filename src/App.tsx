import { useState, useEffect, useMemo } from 'react';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  IconButton,
  Box,
  Tooltip,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { getDesignTokens } from './theme/theme';

import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  // Memoized theme based on mode
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // Smooth scroll to section on anchor click
  useEffect(() => {
    const handleScroll = (e: any) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', handleScroll));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleScroll));
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Theme Toggle Button (Always visible at top-right) */}
      <Box
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 2000,
        }}
      >
        <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
          <IconButton
            onClick={() => setMode(prev => (prev === 'light' ? 'dark' : 'light'))}
            sx={{
              color: mode === 'light' ? '#000' : '#fff',
              backgroundColor: mode === 'light' ? '#f0f0f0' : '#333',
              borderRadius: '50%',
              boxShadow: 3,
              p: "0px",
              '&:hover': {
                backgroundColor: mode === 'light' ? '#e0e0e0' : '#444',
              },
            }}
          >
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Page Sections */}
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
