import { useState } from 'react';
import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Service  from "./pages/Service";
import Navbar  from './components/Navbar';
import Footer from "./components/Footer"
import UserDashboard from "./pages/UserDashboard";
import SellWaste from './pages/SellWaste';
import SupportUs from './pages/SupportUs';
import LearningCentre from "./pages/LearningCentre";
import WasteCollectorDashboard from './pages/WasteCollectorDashboard';
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/sellWaste" element={<SellWaste />} />
          <Route path="/supportUs" element={<SupportUs />} />
          <Route path="/learningCentre" element={<LearningCentre />} />
          <Route path="/wasteCollectorDashboard" element={<WasteCollectorDashboard />} />

          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
