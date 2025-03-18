import React, { useState } from 'react';
import { Box, Container, Typography, Paper, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Assignments() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const questions = [
    {
      question: " My Favourite Dialogue and Why?",
      answer: "Mama always said, 'Life was like a box of chocolates. You never know what you're gonna get. \nThis is my favorite dialogue because it perfectly describes life’s unpredictability. Just like a box of chocolates, life brings different experiences—some sweet, some bitter, but each one is unique. It reminds me to embrace whatever comes my way without fear, just like I did throughout my journey."
    },
    {
      question: "My Personal Review of the Movie",
      answer: "Forrest Gump is a heartwarming and inspiring movie that takes you on an emotional rollercoaster. It shows how someone like me—simple, kind, and determined—can live an extraordinary life just by following my heart. The film beautifully captures love, friendship, and destiny while highlighting historical events in an engaging way. The storytelling, acting, and music make it a timeless classic. If you ask me, it's a movie that leaves you smiling, crying, and thinking about life all at the same time."
    },
    {
      question: "Learning to Take Away from the Movie.",
      answer: "The biggest lesson from my life, as shown in the movie, is that you don’t need to be the smartest or the strongest to succeed—you just need a good heart and the courage to keep going. Whether it’s running, playing ping pong, serving in the army, or starting a business, I never let doubts stop me. The movie teaches that kindness, hard work, and staying true to yourself can take you further than you ever imagined. Also, love and friendship are the most precious things in life, and you should cherish the people who truly care about you."
    },
    {
      question: "Related Concepts I've Learned in the Classroom",
      answer: `Communication Skills: Even though I talk in a simple way, people always listen to me. The movie shows that communication isn’t just about fancy words—it’s about honesty and being genuine. My way of telling stories made people connect with me.
  
               Introduction Techniques: Throughout the movie, I introduce myself in a clear and direct manner: "My name is Forrest, Forrest Gump." It’s short, simple, and memorable—just like how we are taught to introduce ourselves effectively.
  
               Resume Writing: If I were to make a resume, it would include my experience as a football player, soldier, ping pong champion, shrimp boat captain, and runner. The movie teaches that everyone’s journey is unique, and even if your experiences seem different, they can still make a great story—just like a well-structured resume highlights different skills and achievements.`
    }
  ];

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prev) => (prev - 1 + questions.length) % questions.length);
  };

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
            mb: 2,
            color: '#00ff9f',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            textAlign: 'center'
          }}
        >
          Assignment 1: Movie Review
        </Typography>

        <Typography 
          variant="h4" 
          sx={{ 
            mb: 6,
            color: '#8892b0',
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
            textAlign: 'center',
            fontStyle: 'italic'
          }}
        >
          Film Analysis: Forrest Gump (1994)
        </Typography>

        {/* New Side-by-Side Layout */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile, side-by-side on desktop
          gap: 4,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
          {/* Image Section */}
          <Box
            sx={{
              width: { xs: '100%', md: '35%' },
              maxWidth: { xs: '400px', md: 'none' },
              margin: { xs: '0 auto 2rem auto', md: '0' },
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '10px',
              boxShadow: '0 4px 20px rgba(0, 255, 159, 0.2)',
              border: '1px solid rgba(0, 255, 159, 0.2)',
              flexShrink: 0,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(10, 25, 47, 0.2)',
                zIndex: 1,
                transition: 'opacity 0.3s ease',
                opacity: 0,
              },
              '&:hover::before': {
                opacity: 1,
              },
              '&:hover img': {
                transform: 'scale(1.05)',
              }
            }}
          >
            <Box
              component="img"
              src="https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
              alt="Forrest Gump Movie Poster"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.3s ease',
              }}
            />
          </Box>

          {/* Questions Section */}
          <Box sx={{ 
            position: 'relative',
            width: { xs: '100%', md: '65%' },
            minHeight: '300px'
          }}>
            <IconButton 
              onClick={handlePrev}
              sx={{
                position: 'absolute',
                left: { xs: '-20px', md: '-30px' },
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#00ff9f',
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 159, 0.1)'
                }
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>

            <Paper 
              sx={{
                p: 4,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '10px',
                border: '1px solid rgba(0, 255, 159, 0.2)',
                transition: 'all 0.3s ease',
                opacity: 1,
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#00ff9f',
                  mb: 2,
                  fontSize: { xs: '1.2rem', sm: '1.4rem' }
                }}
              >
                Question {currentQuestionIndex + 1}:
              </Typography>
              <Typography 
                sx={{ 
                  color: '#e6f1ff',
                  mb: 3,
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  fontWeight: 500
                }}
              >
                {questions[currentQuestionIndex].question}
              </Typography>
              <Typography 
                sx={{ 
                  color: '#8892b0',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  lineHeight: 1.7,
                  textAlign: 'justify'
                }}
              >
                {questions[currentQuestionIndex].answer}
              </Typography>
            </Paper>

            <IconButton 
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: { xs: '-20px', md: '-30px' },
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#00ff9f',
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 159, 0.1)'
                }
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>

            <Typography 
              sx={{ 
                color: '#00ff9f',
                textAlign: 'center',
                mt: 2
              }}
            >
              {currentQuestionIndex + 1} / {questions.length}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Assignments;