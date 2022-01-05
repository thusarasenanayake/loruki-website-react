import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Docs from './pages/Docs';
import Features from './pages/Features';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
