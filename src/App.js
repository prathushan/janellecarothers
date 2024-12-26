import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Add BrowserRouter, Route, and Routes
import Header from './components/header';  // Correct import path
import Blocks from './components/index-block/blocks';  // Correct import path
import './App.css';
// You should create components for each page like Resume, Portfolio, etc.
import Resume from './pages/Resume'; 
import Portfolio from './pages/Portfolio';
import Trailer from './pages/Trailer';
import Book from './pages/Book';
import About from './pages/About';
import GentlemansLab from './pages/Gentlemen';

const App = () => {
  return (
    <Router>  {/* Wrap the app with BrowserRouter */}
      <Header />
     
      <Routes>
        <Route path="/" element={<Blocks />} />
      
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
        <Route path="/gentlemans-lab" element={<GentlemansLab />} />
      </Routes>
    </Router>
  );
}

export default App;
