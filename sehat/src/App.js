import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/HomePage/Navbar";
import HomePage from "./components/HomePage/HomePage";
import HeroSection from "./components/HospitalList/HeroSection";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-hospital" element={<HeroSection />} />
      </Routes>
    </Router>
  );
}

export default App;
