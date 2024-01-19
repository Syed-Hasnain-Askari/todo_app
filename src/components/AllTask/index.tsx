import React from 'react';
import TemplateTester from '@/components/TemplateTester/TemplateTester';
import { Container } from '@mui/material';
import Counter from '@/components/Counter/Counter';
const AllTask = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <TemplateTester />
      <Counter />
    </Container>
  );
};

export default AllTask;
