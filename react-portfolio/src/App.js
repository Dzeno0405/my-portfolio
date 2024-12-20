import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import Info from "./components/Info";
import Skills from './components/Skills';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <Profile />
            <Info />
          </div>
        } />
        <Route path="/skills" element={<Skills />} />
        <Route path="/future" element={<div>Future</div>} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/socials" element={<div>Socials</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;