import React, { Suspense } from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

// Lazy load CardMedia component
const CardMedia = React.lazy(() => import('@mui/material/CardMedia'));

// Loading placeholder
const LoadingPlaceholder = () => (
  <div style={{ width: '100%', height: '200px', backgroundColor: '#f0f0f0' }} />
);

const Projects = () => {
  const projects = [
    {
      title: '25+5 Clock',
      description: 'A Pomodoro timer application that helps users manage their work and break sessions effectively.',
      image: 'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&h=400&fit=crop'
    },
    {
      title: 'Drum Machine',
      description: 'An interactive drum pad application that lets users create beats using keyboard or mouse input.',
      image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=400&fit=crop'
    },
    {
      title: 'Random Quote Generator',
      description: 'A web application that displays inspirational quotes randomly with social media sharing.',
      image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&h=400&fit=crop'
    },
    {
      title: 'Ecommerce Website',
      description: 'A full-featured ecommerce platform with product catalog, shopping cart, and secure checkout.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop'
    }
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
        Mini Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <Suspense fallback={<LoadingPlaceholder />}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </Suspense>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
