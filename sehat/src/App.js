import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/HomePage/Navbar";
import HomePage from "./components/HomePage/HomePage";
import HospitalDetails from "./components/HospitalDetails/Details";
import FindHospital from "./components/HospitalList/HeroSection";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-hospital" element={<FindHospital />} />
        <Route path="/find-hospital/details" element={<HospitalDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
