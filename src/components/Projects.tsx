import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  useTheme,
  Stack,
  Container,
} from '@mui/material';
import { projects } from '../projectss';

const Projects: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '50vh',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: theme.typography.fontFamily,
            mb: 6,
          }}
        >
          My Projects
        </Typography>
      </Container>

      <Box
        sx={{
          display: 'flex',
          // gap: 4,
          px: 15,
          paddingLeft: "17em",
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { display: 'none' },
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              
              flex: '0 0 calc(50% - 2rem)', // Show 2 items
              scrollSnapAlign: 'start',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paper
              elevation={4}
              sx={{
                p: 3,
                width: '100%',
                maxWidth: 500,
                borderRadius: 4,
                backdropFilter: 'blur(10px)',
                background: theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.7)'
                  : 'rgba(30, 30, 30, 0.5)',
                border: theme.palette.mode === 'light'
                  ? '1px solid rgba(0,0,0,0.1)'
                  : '1px solid rgba(255,255,255,0.1)',
                boxShadow: theme.palette.mode === 'light'
                  ? '0 8px 24px rgba(0,0,0,0.1)'
                  : '0 8px 24px rgba(0,0,0,0.5)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {project.description}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
                {project.technologies.map((tech, i) => (
                  <Chip key={i} label={tech} size="small" />
                ))}
              </Stack>

              <Button
                variant="outlined"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 2,
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                View Project
              </Button>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
