import React, { useState, useEffect } from 'react';
import { CardMedia, Box, Typography } from '@mui/material';

const OptimizedImage = ({ src, alt, sx, ...props }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <Box position="relative">
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          }}
        >
          <Typography sx={{ color: '#00ff9f' }}>Loading...</Typography>
        </Box>
      )}
      <CardMedia
        component="img"
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        sx={{
          ...sx,
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
        {...props}
      />
    </Box>
  );
};

export default OptimizedImage;