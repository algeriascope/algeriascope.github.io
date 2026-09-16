import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Exchange from './pages/Exchange';

const app = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/exchange" element={<Exchange />}></Route>
      </Routes>
    </>
  );
};

export default app;
