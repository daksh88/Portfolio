import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const About = () => {
  return (
    <Box 
      id="about" 
      sx={{ 
        paddingTop: '80px', // Add padding to account for navbar height
        minHeight: '100vh'  // Ensure full viewport height
      }}
    >
      <Container>
        <Box sx={{ mt: 4 }}>
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{
              color: '#00ff9f',
              textAlign: 'center',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            About Me
          </Typography>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3,
              backgroundColor: 'rgba(17, 34, 64, 0.8)',
              border: '1px solid rgba(0, 255, 159, 0.2)'
            }}
          >
            <Typography 
              paragraph
              sx={{ 
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                color: '#e6f1ff'
              }}
            >
              I'm Daksh Nautiyal, a passionate Computer Science Engineering student at Graphic Era Hill University (2022-2026), based in Dehradun, Uttarakhand. I'm an aspiring Software Engineer with a love for full-stack development, cloud computing, and DevOps, always chasing scalable and user-friendly tech solutions. Whether it's coding a sleek React e-commerce platform or building a hand-gesture volume control system with Python, I thrive on turning ideas into reality.
            </Typography>
            <Typography 
              paragraph
              sx={{ 
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                color: '#e6f1ff'
              }}
            >
              I've got hands-on experience as a Web Development Intern at Digital Nomadians, where I crafted responsive websites, integrated payment gateways, and boosted SEO for clients. My projects—like a WordPress e-commerce site, a Pomodoro-style 25+5 Clock, and a Text-to-Speech Translator—showcase my skills in React.js, Node.js, Python, and more. I'm comfortable with languages like C, C++, JavaScript, and Java, and I've dabbled in AI/ML with tools like OpenCV and TensorFlow.
            </Typography>
            <Typography 
              paragraph
              sx={{ 
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                color: '#e6f1ff'
              }}
            >
              Beyond tech, I've served as Senior Manager at AIESEC in Dehradun, securing partnerships, managing teams, and organizing events like Global Village 2024. I'm all about continuous learning, exploring new trends, and building stuff that makes a difference. Check out my work at <a href="daksh88.github.io/portfolio-website/">Portfolio</a> or connect with me on LinkedIn—let's create something awesome together!
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
