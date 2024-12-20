import React from "react";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Profile />
      <About />
      <Footer />
    </div>
  );
}

export default App;
