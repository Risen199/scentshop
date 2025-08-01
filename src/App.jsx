import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fragrances from './pages/Fragrances';
import ContactUs from './pages/ContactUs';
import Home from './pages/home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
