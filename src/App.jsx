import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Exchange from './components/Exchange';

const app = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Exchange" element={<Exchange />}></Route>
      </Routes>
    </>
  );
};

export default app;
