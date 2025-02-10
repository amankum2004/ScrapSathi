import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link
              to="/register"
              className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            >
              Login / Signup
            </Link>
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
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
            <Link
              to="/register"
              className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              Login / Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink Component with hover effect
const NavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="relative  text-gray-700 font-medium hover:text-green-600 transition duration-300"
  >
    {label}
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300"></span>
  </Link>
);

export default Navbar;
