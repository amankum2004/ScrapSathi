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
import { LoginProvider } from './components/LoginContext';
import { Error } from './pages/Error';
import SellWaste from './pages/SellWaste';
import SupportUs from './pages/SupportUs';
import LearningCentre from "./pages/LearningCentre";
import WasteCollectorDashboard from './pages/WasteCollectorDashboard';
// import RegisterWasteCollector from './pages/WasteCollectorRegistration';
import EditProfile from './pages/EditProfile';
import ProfileView from './pages/UserProfile';
import AdvancedDashboard from './pages/AdvancedDashboard'

function App() {
 
  return (
    <>
    <BrowserRouter>
      <LoginProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/individual-dashboard" element={<UserDashboard />} />
          <Route path="/sellWaste" element={<SellWaste />} />
          <Route path="/supportUs" element={<SupportUs />} />
          <Route path="/learningCentre" element={<LearningCentre />} />
          <Route path="/waste-collector-requests" element={<WasteCollectorDashboard />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/AdvancedDashboard" element={<AdvancedDashboard/>} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </LoginProvider>
    </BrowserRouter>
    </>
  );
}

export default App
