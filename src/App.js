import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/About" element={<About />} />
        <Route path="/pages/Contact" element={<Contact />} />
        <Route path="/pages/Services" element={<Services />} />
        <Route path="/pages/Portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
};

export default App;
