import React, { useState } from 'react';
import { Box, Typography, Container, IconButton, Tooltip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

function PESE() {
  const [videoHovered, setVideoHovered] = useState({ left: false, right: false });

  return (
    <Box sx={{ 
      minHeight: '100vh',
      pt: '64px',
      backgroundColor: '#0a192f',
      position: 'relative',
      display: 'flex'
    }}>
      {/* Side Navigation Bar */}
      <Box sx={{ 
        width: '60px', 
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        py: 4,
        position: 'fixed',
        top: '64px',
        left: 0,
        height: '100vh',
        zIndex: 1000,
        borderRight: '1px solid rgba(0, 255, 159, 0.2)'
      }}>
        <Tooltip title="My Introduction" placement="right" arrow>
          <IconButton 
            component={Link} 
            to="/pese/my-introduction" 
            sx={{ 
              color: '#00ff9f', 
              mb: 2,
              '&:hover': {
                backgroundColor: 'rgba(0, 255, 159, 0.1)',
                transform: 'scale(1.1)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <PersonIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Assignments" placement="right" arrow>
          <IconButton 
            component={Link} 
            to="/pese/assignments" 
            sx={{ 
              color: '#00ff9f', 
              mb: 2,
              '&:hover': {
                backgroundColor: 'rgba(0, 255, 159, 0.1)',
                transform: 'scale(1.1)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <AssignmentIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4, ml: '80px' }}>
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 6,
            color: '#00ff9f',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            textAlign: 'center'
          }}
        >
          Introductory Video
        </Typography>
        
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Left Video */}
          <Box
            component="video"
            controls
            sx={{
              width: { xs: '100%', md: '45%' },
              height: 'auto',
              borderRadius: '10px',
              border: '1px solid rgba(0, 255, 159, 0.2)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}
          >
            <source src={`${process.env.PUBLIC_URL}/videos/Sixer.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </Box>

          {/* Right Video */}
          <Box
            component="video"
            controls
            sx={{
              width: { xs: '100%', md: '45%' },
              height: 'auto',
              borderRadius: '10px',
              border: '1px solid rgba(0, 255, 159, 0.2)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}
          >
            <source src={`${process.env.PUBLIC_URL}/videos/Fiver.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </Box>
        </Box>

        {/* Week 1 Section */}
        <Box sx={{ 
          mt: 8,
          p: 4,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '10px',
          border: '1px solid rgba(0, 255, 159, 0.2)'
        }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#00ff9f',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              textAlign: 'center',
              mb: 3
            }}
          >
            Week 1
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#00ff9f',
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              mb: 2,
              textAlign: 'center'
            }}
          >
             Sixer Method for Self-Introduction
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              color: '#8892b0',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.7,
              textAlign: 'justify'
            }}
          >
            This week, I learned the Sixer Method, a structured way to introduce myself effectively. It includes six key points:<br></br>
            <br></br>
              Name – Introducing myself with my full name.<br></br>
              Residing in – Mentioning my current place of residence.<br></br>
              Education – Briefly stating my academic background.<br></br>
              Internships/Projects – Highlighting relevant experiences and projects.<br></br>
              Hobbies – Sharing interests that define me beyond academics.<br></br>
              Career Objective – Expressing my long-term professional goals.
          </Typography>
        </Box>

        {/* Week 2 Section */}
        <Box sx={{ 
          mt: 8,
          p: 4,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '10px',
          border: '1px solid rgba(0, 255, 159, 0.2)'
        }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#00ff9f',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              textAlign: 'center',
              mb: 3
            }}
          >
            Week 2
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#00ff9f',
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              mb: 2,
              textAlign: 'center'
            }}
          >
            Fiver Rule for Self-Introduction
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              color: '#8892b0',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.7,
              textAlign: 'justify'
            }}
          >
            This week, I learned the Fiver Rule, another technique for introducing myself in a structured manner. It consists of five essential elements:
            <br></br>
            <br></br>
            Name – Stating my full name.<br></br>
            Residing in – Mentioning my current location.<br></br>
            Education – Briefly describing my academic journey.<br></br>
            Family – Providing a short insight into my family background.<br></br>
            Goal – Sharing my ultimate career or life goal.
          </Typography>
        </Box>

        {/* Week 3 Section */}
        <Box sx={{ 
          mt: 8,
          p: 4,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '10px',
          border: '1px solid rgba(0, 255, 159, 0.2)'
        }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#00ff9f',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              textAlign: 'center',
              mb: 3
            }}
          >
            Week 3
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#00ff9f',
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              mb: 2,
              textAlign: 'center'
            }}
          >
            25 Words Introduction
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              color: '#8892b0',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.7,
              textAlign: 'justify'
            }}
          >
            This introduction aims to be specific about yourself and the word limit must not exceed 25 words.<br></br>
            The introduction must contain your specific skills, projects and internships done in the past.
          </Typography>
        </Box>

        {/* Week 4 Section */}
        <Box sx={{ 
          mt: 8,
          p: 4,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '10px',
          border: '1px solid rgba(0, 255, 159, 0.2)'
        }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#00ff9f',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              textAlign: 'center',
              mb: 3
            }}
          >
            Week 4
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#00ff9f',
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              mb: 2,
              textAlign: 'center'
            }}
          >
             Resume Writing
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              color: '#8892b0',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.7,
              textAlign: 'justify'
            }}
          >
           Structure
                            <br></br>
                            <br></br>
                            Name & Contact Info<br></br>
                            Summary
                            <br></br>
                            Education
                            <br></br>
                            Experience
                            <br></br>
                            Skills
                            <br></br>
                            Projects
                            <br />
                            Certifications
                            <br />
                            Leadership & Achievements
                            <br />
                            Extracurricular Activities
                            <br />
                            Declaration
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default PESE;