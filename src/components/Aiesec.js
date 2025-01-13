import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Aiesec = () => {
  const experiences = [
    {
      title: 'Global Volunteer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Leadership Development',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  const [images] = useState([
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg'
  ]);

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>AIESEC Experiences</Typography>
        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{exp.title}</Typography>
                  <Typography>{exp.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h4" gutterBottom>Gallery</Typography>
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slideshow Image ${index + 1}`} style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.5s ease',
                  '&:hover': { transform: 'scale(1.05)' }
                }} />
              </div>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Container>
  );
};

export default Aiesec;
