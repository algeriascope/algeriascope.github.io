import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rates from './pages/Rates';
import Wilayas from './pages/Wilayas';
import Postcodes from './pages/Postcodes';
import History from './pages/History'
import WilayaPostcodes from './pages/WilayaPostcodes';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';

const app = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    const currentLang = i18n.language || 'en';

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang.startsWith('ar') ? 'rtl' : 'ltr';
  }, [i18n.language]);
  return (
    <>
      <ScrollToTop />
      <div dir="ltr">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rates" element={<Rates />}></Route>
        <Route path="/wilayas" element={<Wilayas />}></Route>
        <Route path="/postcodes" element={<Postcodes />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route
          path="postcodes/:wilayaSlug"
          element={<WilayaPostcodes />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default app;
