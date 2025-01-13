import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const certificates = [
    '/certificate1.jpg',
    '/certificate2.jpg',
    '/certificate3.jpg'
  ];

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Certificates</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button onClick={prevCertificate} variant="outlined">&lt;</Button>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <img src={certificates[currentIndex]} alt={`Certificate ${currentIndex + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
        </Box>
        <Button onClick={nextCertificate} variant="outlined">&gt;</Button>
      </Box>
    </Container>
  );
};

export default Certificates;
