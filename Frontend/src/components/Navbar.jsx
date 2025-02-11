import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLogin } from "./LoginContext";
import { NavDropdown } from "react-bootstrap";  
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedIn, user, logout } = useLogin();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white opacity-97 backdrop-blur-md shadow-md ">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text"
          >
            ScrapSathi
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-white">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />
            <NavLink to="/services" label="Services" />
            <NavLink to="/contact" label="Contact" />

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
                        color: "black",
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
            {/* <Link
              to="/register"
              className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            >
              Login / Signup
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
      </div>
    </nav>
  );
};


export default Navbar;
