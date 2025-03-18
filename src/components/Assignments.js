import React from 'react';
import { Box, Container, Typography, Paper, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Assignments() {
  const navigate = useNavigate();
  
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

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {questions.map((item, index) => (
            <Paper 
              key={index}
              sx={{
                p: 4,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '10px',
                border: '1px solid rgba(0, 255, 159, 0.2)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
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
                Question {index + 1}:
              </Typography>
              <Typography 
                sx={{ 
                  color: '#e6f1ff',
                  mb: 3,
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  fontWeight: 500
                }}
              >
                {item.question}
              </Typography>
              <Typography 
                sx={{ 
                  color: '#8892b0',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  lineHeight: 1.7,
                  textAlign: 'justify'
                }}
              >
                {item.answer}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Assignments;