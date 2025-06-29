import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

const About: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ display: "flex", flexDirection: "column", alignItems:"center", fontWeight: 'bold', fontFamily: theme.typography.fontFamily, padding: "15px" }}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            fontWeight: 300,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Hi! I'm Bhuwan Jain, a full-stack developer passionate about analyzing data and building modern,
          interactive web applications. I love solving complex problems and turning ideas into reality
          through code. Whether it's creating seamless user experiences or working with backend systems,
          I bring dedication and enthusiasm to every project.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
