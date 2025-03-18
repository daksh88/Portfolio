import React from 'react';
import { Box, Container, Typography, Paper, Grid, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function MyIntroduction() {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      minHeight: '100vh',
      pt: '80px',
      backgroundColor: '#0a192f',
    }}>
      <IconButton
        onClick={() => navigate('/pese')}
        sx={{
          position: 'absolute',
          top: '80px',
          left: '20px',
          color: '#00ff9f',
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 159, 0.1)'
          }
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 6,
            color: '#00ff9f',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            textAlign: 'center'
          }}
        >
          My Introduction
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper sx={{
              p: 4,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '10px',
              border: '1px solid rgba(0, 255, 159, 0.2)'
            }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#00ff9f',
                  mb: 3,
                  textAlign: 'center'
                }}
              >
                Sixer Method Introduction
              </Typography>
              <Typography 
                sx={{ 
                  color: '#8892b0',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  textAlign: 'justify'
                }}
              >
                Hello, my name is Daksh Nautiyal, and I am from Dehradun, Uttarakhand. I am currently in my third year of B.Tech in Computer Science and Engineering at Graphic Era Hill University. Before that, I completed my schooling at [Your School Name].

                I recently worked as a Web Development Intern at Digital Nomadians, a startup where I gained hands-on experience in Frontend Development, backend fundamentals, and WordPress website management. Being part of a startup gave me exposure to a structured yet fast-paced work environment, where I collaborated with teams, handled multiple responsibilities, and learned to adapt quickly—skills that are crucial in any corporate setting.

                Beyond my technical journey, I have also been actively involved with AIESEC in Dehradun, where I took on leadership roles for 1.5 years. I served as Senior Manager for Business Development for 12 months, building partnerships and managing client relationships, and later as Senior Manager for Incoming Global Volunteer Customer Experience for 6 months, ensuring smooth international exchange operations. These roles helped me develop problem-solving, decision-making, leadership, and interpersonal skills, all of which complement my technical expertise and contribute to my holistic professional growth.

                Projects & Problem-Solving Approach:
                I have worked on multiple projects that reflect my ability to solve real-world problems, including:

                Motion Gesture Volume Controller – A system that enables volume control using hand gestures, leveraging computer vision techniques.
                Personal Portfolio Website – Built using React.js, featuring modern UI/UX, animations, and responsiveness.
                Other projects include a 25+5 Clock, Drum Machine, and a Text-to-Speech & Speech-to-Text Translator using Python.
                Beyond Work – Skills That Drive Me:
                Outside of academics and work, I actively engage in strategic and high-focus activities like Table Tennis. The sport has taught me quick adaptability, precision, and analytical thinking—qualities that are directly applicable in a professional setting. Just as in a fast-paced corporate environment, where one must anticipate challenges and act swiftly, I have learned how to analyze situations, strategize effectively, and execute with precision, making me a valuable asset to any team.

                Career Objective:
                I aim to be part of a forward-thinking organization where I can apply my technical and problem-solving skills to build impactful solutions. I look forward to an environment that fosters growth, innovation, and collaboration, allowing me to contribute meaningfully while continuously evolving as a professional.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{
              p: 4,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '10px',
              border: '1px solid rgba(0, 255, 159, 0.2)'
            }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#00ff9f',
                  mb: 3,
                  textAlign: 'center'
                }}
              >
                Fiver Method Introduction
              </Typography>
              <Typography 
                sx={{ 
                  color: '#8892b0',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  textAlign: 'justify'
                }}
              >
                Hello, my name is Daksh Nautiyal, and I am from Dehradun, Uttarakhand. I am currently in my third year of B.Tech in Computer Science and Engineering at Graphic Era Hill University.

                Family & Learnings from Them:
                Coming from a family where each member plays a unique role, I have had the privilege of learning invaluable skills that contribute to my professional growth.

                My father is a Director at a School, and seeing him manage an institution has taught me leadership, strategic thinking, and decision-making. From him, I have learned how to handle responsibilities, communicate effectively, and ensure that every decision contributes to a bigger goal—skills that are essential in any corporate environment.

                My mother is a homemaker, and her ability to manage multiple tasks effortlessly has instilled in me the importance of organization, patience, and adaptability. Whether it’s handling diverse challenges or maintaining a structured workflow, I have realized that success lies in balance and efficiency—qualities that are equally important in professional settings.

                My younger sister is in the 10th standard, and through her, I have learned the value of continuous learning, curiosity, and resilience. Watching her navigate new subjects and challenges reminds me that growth comes from being open to learning and adapting—something I always strive for in my career as well.

                Short-Term Goal & Alignment with the Company:
                My immediate goal is to enhance my technical expertise and problem-solving skills in a dynamic corporate environment where I can contribute meaningfully. I am particularly excited about the opportunity at [Company Name], as it fosters innovation, collaboration, and professional growth. The company’s vision aligns with my own aspirations, and I look forward to leveraging my skills while learning from industry experts to create impactful solutions.


              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{
              p: 4,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '10px',
              border: '1px solid rgba(0, 255, 159, 0.2)'
            }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#00ff9f',
                  mb: 3,
                  textAlign: 'center'
                }}
              >
                25 Words Introduction
              </Typography>
              <Typography 
                sx={{ 
                  color: '#8892b0',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  textAlign: 'justify'
                }}
              >
                I'm Daksh Nautiyal, a Web Development Intern at Digital Nomadians. I've built projects like a Motion Gesture Volume Controller and a React-based Portfolio Website, showcasing my skills.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MyIntroduction;