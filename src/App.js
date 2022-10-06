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
        <Route path="/lpu" exact element={<Home />} />
        <Route path="/lpu/blog" element={<Blog />} />
        <Route path="/lpu/about" element={<About />} />
        <Route path="/lpu/contact" element={<Contact />} />
        
        <Route path="*" element={
          <>
            <h1 className="text-2xl font-bold">404 Page Not Found</h1>
            <Link to="/lpu">Go to Home</Link>
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
