import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  useTheme,
  Paper,
} from '@mui/material';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const theme = useTheme();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs.sendForm('service_bbtkz1o', 'template_bqfnwf5', formRef.current, 'AeEaE6LZum4NBszSH').then(
        () => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error);
        }
      );
    }
    console.log('Form Data:', formData);
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 4,
            backgroundColor:
              theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.9)'
                : 'rgba(30, 30, 30, 0.8)',
            backdropFilter: 'blur(10px)',
            boxShadow:
              theme.palette.mode === 'light'
                ? '0 8px 24px rgba(0,0,0,0.1)'
                : '0 8px 24px rgba(0,0,0,0.5)',
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 4 }}
          >
            Contact Me
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              required
            />
            <Box textAlign="center" mt={3}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ px: 4, py: 1 }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
