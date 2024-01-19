import React from 'react';
import { Container } from '@mui/material';
import Header from '@/components/Header';
const Home = () => {
  return (
    <Container sx={{ py: 10, position: 'relative' }}>
      <Header />
    </Container>
  );
};
export default Home;
