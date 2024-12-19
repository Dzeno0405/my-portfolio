import React from "react";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portrait from "./components/Portrait";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Portrait />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
