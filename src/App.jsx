import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rates from './pages/Rates';
import Wilayas from './pages/Wilayas';
import Postcodes from './pages/Postcodes'
import Footer from './components/Footer'
const app = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rates" element={<Rates />}></Route>
          <Route path="/wilayas" element={<Wilayas />}></Route>
          <Route path="/postcodes" element={<Postcodes />}></Route>
      </Routes>
      <Footer />

    </>
  );
};

export default app;
