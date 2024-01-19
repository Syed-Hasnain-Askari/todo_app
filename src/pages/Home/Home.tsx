import React from 'react';
import { Container } from '@mui/material';
import { SearchBar } from '@/components/Atoms/SearchBar';
const Home = () => {
  return (
    <Container sx={{ py: 10, position: 'relative' }}>
      <SearchBar />
    </Container>
  );
};

export default Home;
