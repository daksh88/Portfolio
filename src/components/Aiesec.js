import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Paper } from '@mui/material';

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

  const aiesecImages = [
    { title: 'Experience 1', image: 'public/slide1.jpg', description: 'Description 1' },
    { title: 'Experience 2', image: 'public/slide2.jpg', description: 'Description 2' },
    { title: 'Experience 3', image: 'public/slide3.jpg', description: 'Description 3' },
    { title: 'Experience 4', image: 'public/slide4.jpg', description: 'Description 4' }
  ];

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
          <Grid container spacing={2}>
            {aiesecImages.map((experience, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                  <img src={experience.image} alt={experience.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                  <Typography variant="h6" sx={{ marginTop: 1 }}>
                    {experience.title}
                  </Typography>
                  <p>{experience.description}</p>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Aiesec;
