import React from 'react';
import {HashRouter, Route, Routes, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import StudyMaterials from './components/StudyMaterials';
import Projects from './components/Projects';
import Roadmaps from './components/Roadmaps';
import Footer from './components/Footer';
import Post from './components/Post';

function App() {

return (
  <>
    <HashRouter>
      <Navbar />
      <div className="mb-20">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/study-materials" element={<StudyMaterials />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={
          <>
            <h1 className="text-2xl font-bold">404 Page Not Found</h1>
            <Link to="/">Go to Home</Link>
          </>
        }
        />
      </Routes>
      </div>
      <Footer />
    </HashRouter>
  </>
  );
}

export default App;