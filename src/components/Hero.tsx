import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';


const Hero: React.FC = () => {
  return (
    <Box
      id="hero"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        color: 'text.primary',
        background: 'background.paper', // optional background
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          background: 'rgba(255, 255, 255, 0.1)', // optional glass effect
          backdropFilter: 'blur(10px)',
          borderRadius: 4,
          p: 4,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', sm: '3rem' },
          }}
        >
          HI! I'M BHUWAN
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 300,
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
          }}
        >
          Analyzing data and web development is what I do.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            px: 4,
            py: 1.5,
            backgroundColor: '#61dafb',
            color: '#282c34',
            fontSize: '1rem',
            borderRadius: '8px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#21a1f1',
            },
          }}
          href="#about"
        >
          ABOUT ME
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
