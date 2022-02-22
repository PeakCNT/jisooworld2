import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Biography from "./pages/Biography";

const RouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RouterSetup;
