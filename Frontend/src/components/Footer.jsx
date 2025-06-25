import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">ScrapSathi</h3>
            <p className="text-lg text-gray-400">
              Your trusted partner in waste management and sustainability.
              Helping to build a cleaner, greener world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Privacy-Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact & Follow Us</h3>
            <p className="text-lg text-gray-400 mb-4">
              Reach out to us for inquiries or support. Follow us on social
              media for the latest updates.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            &copy; 2025 ScrapSathi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
