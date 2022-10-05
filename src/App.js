import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={
          <>
        <div>Page not found</div>
        <Link to="/">Home</Link>
        </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
