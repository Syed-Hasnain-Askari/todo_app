// Routing.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '@/pages/Auth/Register';
import Layout from '@/Layout';
import AllTask from '@/components/AllTask';
import Home from '@/pages/Home/Home';
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="alltask" element={<AllTask />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Routing;
