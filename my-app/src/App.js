// src/App.js
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Content />
      </Container>
    </React.Fragment>
  );
}

export default App;
