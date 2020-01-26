import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ConversionForm from './components/ConversionForm';
import Copyright from './components/Copyright';
import Header from './components/Header';

export default function App() { 
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Header />
        <ConversionForm />
        <Copyright />
      </Box>
    </Container>
  );
}
