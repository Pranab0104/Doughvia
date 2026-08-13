import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import HomePage from "./components/HomePage";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Celebrate from "./pages/Celebrate";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/celebrate" element={<Celebrate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;