import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLogin } from "./LoginContext";
import { NavDropdown } from "react-bootstrap";  
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedIn, user, logout } = useLogin();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [scrolled, setScrolled] = useState(false);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false); 
  // New state for side drawer

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-full transition-all duration-300 bg-white py-4`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300"
          >
            ScrapSathi
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />
            <NavLink to="/services" label="Services" />
            <NavLink to="/contact" label="Contact" />
            <Link
              to="/login"
              className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:from-green-500 hover:to-blue-400"
            >
              Login / Signup
            </Link>

            {/* Button to trigger side drawer for extra links */}
            <button
              className="text-gray-700 focus:outline-none hover:text-green-600 transition-colors duration-300"
              onClick={() => setSideDrawerOpen(!sideDrawerOpen)}
              aria-label={sideDrawerOpen ? "Close menu" : "Open menu"}
            >
              {sideDrawerOpen ? (
                <XMarkIcon className="h-7 w-7 transition-transform duration-300 rotate-90" />
              ) : (
                <Bars3Icon className="h-7 w-7 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none hover:text-green-600 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7 transition-transform duration-300 rotate-90" />
            ) : (
              <Bars3Icon className="h-7 w-7 transition-transform duration-300 hover:rotate-180" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center space-y-5 py-4">
            <NavLink to="/" label="Home" onClick={() => setIsOpen(false)} />
            <NavLink
              to="/about"
              label="About"
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              to="/services"
              label="Services"
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              to="/contact"
              label="Contact"
              onClick={() => setIsOpen(false)}
            />
            {/* <Link
              to="/register"
              className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            <Link
              to="/login"
              className="bg-gradient-to-r from-green-600 to-blue-500 text-white w-full text-center px-6 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 hover:from-green-500 hover:to-blue-400"
              onClick={() => setIsOpen(false)}
            >Login / Signup
            </Link> */}

            {loggedIn ? (
              <>
                {/* Hide profile image on small screens */}
                <img
                  alt="img"
                  className="img hidden md:block"
                  src="/images/dp_logo.jpg"
                  width="50"
                  height="50"
                  style={{ marginRight: "4px", marginLeft: "-20px" }} />
                {/* <NavDropdown
                  className="nav-dropdown mr-12 md:block"
                  title={
                    <span
                      style={{
                        color: "yellow",
                        fontWeight: 'bold',
                        fontSize: '19px',
                        transition: 'color 0.3s ease',
                        // marginBottom:"30px",marginRight:"30px"
                      }}
                    >
                      {user.name}
                    </span>
                  }
                  id="collasible-nav-dropdown">
                  {user.usertype === 'individual' ? (
                    <>
                      <NavDropdown.Item href="/barberprofile" style={{ color: 'blue', fontWeight: 'bold' }}>My Profile</NavDropdown.Item>
                      <NavDropdown.Item href="/registershop" style={{ color: 'blue', fontWeight: 'bold' }}>Register yourself as Waste Collector</NavDropdown.Item>
                    </>
                  ) : user.usertype === 'admin' ? (
                    <>
                      <NavDropdown.Item href="/customerprofile" style={{ color: 'blue', fontWeight: 'bold' }}>My Profile</NavDropdown.Item>
                      <NavDropdown.Item href="/admin" style={{ color: 'green', fontWeight: 'bold' }}>Admin Dashboard</NavDropdown.Item>
                      <NavDropdown.Item href="/registershop" style={{ color: 'blue', fontWeight: 'bold' }}>Register a Waste Collector</NavDropdown.Item>
                    </>
                  ) : (
                    <>
                      <NavDropdown.Item href="/customerprofile" style={{ color: 'orange', fontWeight: 'bold' }}>My Profile</NavDropdown.Item>
                      <NavDropdown.Item href="/nearbyShops" style={{ color: 'orange', fontWeight: 'bold' }}>Book Appointment</NavDropdown.Item>
                    </>
                  )}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout} style={{ color: 'red', fontWeight: 'bold' }}>Logout</NavDropdown.Item>
                </NavDropdown> */}
              </>
            ) : (
              <>
                {/* Hide profile image on small screens */}
                <img
                  alt="img"
                  className="img hidden sm:block"
                  src="/images/dp_logo.jpg"
                  width="50"
                  height="50"
                  style={{ marginRight: 10 }} />
                <li className="nav-item login-item">
                  {/* <NavLink
                    exact="true"
                    to="/login"
                    style={{ color: "yellow", marginBottom: "30px", marginRight: "35px" }}
                    className="nav-links"
                    onClick={handleClick}>
                    Login
                  </NavLink> */}
                  <Link
              to="/register"
              className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >Login / Signup
            </Link>
                </li>
              </>
            )}
          </div>
        </div>

        {/* Side Drawer for extra links (visible on desktop) */}
        <div
          className={`absolute top-[67px] right-0 w-64 h-full transform transition-transform duration-300 ease-in-out z-40 ${
            sideDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="bg-white min-h-screen flex flex-col items-center space-y-5 py-4">
            <NavLink
              to="/learning"
              label="📘 Learning"
              onClick={() => setSideDrawerOpen(false)}
            />
            <NavLink
              to="/donate"
              label="🌱 Donate for Environment"
              onClick={() => setSideDrawerOpen(false)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Enhanced NavLink Component with improved hover effect
// const NavLink = ({ to, label, onClick }) => (
//   <Link
//     to={to}
//     onClick={onClick}
//     className="relative text-gray-700 font-medium hover:text-green-600 transition duration-300 group py-2"
//   >
//     {label}
//     <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-600 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
//   </Link>
// );

export default Navbar;
