// src/components/Header.js
import React from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';

function Header() {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 2,
      }}
    >
      <img src={`${process.env.PUBLIC_URL}/images/header-image.jpg`} alt="Header" style={{ width: matches ? '100%' : 'auto', maxHeight: '200px', objectFit: 'cover' }} />
      <Typography variant="h3" component="h1">
        Hexyl's Playground
      </Typography>
    </Box>
  );
}

export default Header;
