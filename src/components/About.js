import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      try {
        if (window.scrollY > 0) {
          setVisible(true);
        }
      } catch (error) {
        console.error('Error in scroll handler:', error);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      try {
        window.removeEventListener('scroll', handleScroll);
      } catch (error) {
        console.error('Error removing scroll event listener:', error);
      }
    };
  }, []);

  // Only render the About section if visible
  if (!visible) return null;

  return (
    <Box id="about">
      <Container>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h3" gutterBottom>About Me</Typography>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography paragraph>
              Passionate Computer Science student at Graphic Era Hill University, dedicated to advancing my skills and knowledge in the field of engineering.
            </Typography>
            <Typography paragraph>
              Proficient in C, C++, and Java, with additional expertise in HTML, CSS, and JavaScript.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
