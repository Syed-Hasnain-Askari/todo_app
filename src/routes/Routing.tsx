// Routing.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Register from '@/pages/Auth/Register';
import Layout from '@/Layout';
import AllTask from '@/components/AllTask';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path="alltask" element={<AllTask />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Routing;
