import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Info from "./components/Info";
import About from "./components/About";
import Skills from "./components/Skills";
import Future from "./components/Future";
import Projects from "./components/Projects";
import "./index.css";

const PAGE_TITLES = {
  "/": "Dženan Polutak — Portfolio",
  "/about": "About — Dženan Polutak",
  "/skills": "Skills — Dženan Polutak",
  "/future": "Future Plans — Dženan Polutak",
  "/projects": "Projects — Dženan Polutak",
};

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] ?? "Dženan Polutak";
  }, [location]);

  return (
    <div className="app">
      <div className="app-background" aria-hidden="true">
        <img src="/logo.png" alt="" className="app-background-logo" />
      </div>

      <Navbar />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Profile />
                <Info />
              </>
            }
          />
          <Route path="/about"    element={<About />}    />
          <Route path="/skills"   element={<Skills />}   />
          <Route path="/future"   element={<Future />}   />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
