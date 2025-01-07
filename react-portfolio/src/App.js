import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Skills from "./components/Skills";
import About from "./components/About";
import Future from "./components/Future";
import Projects from "./components/Projects";

import "./index.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Dzenan's Portfolio"; 
    if (path === "/about") {
      title = "Dzenan's About";
    } else if (path === "/skills") {
      title = "Dzenan's Skills";
    } else if (path === "/future") {
      title = "Dzenan's Future";
    } else if (path === "/projects") {
      title = "Dzenan's Projects";
    } else if (path === "/socials") {
      title = "Dzenan's Socials";
    }

    document.title = title; 
  }, [location]);

  return (
    <div className="app">
      <div className="app-background">
        <img src="/logo.png" alt="Logo" className="app-background-logo" />
      </div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Profile />
              <Info />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/future" element={<Future />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/socials" element={<div>Socials</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
