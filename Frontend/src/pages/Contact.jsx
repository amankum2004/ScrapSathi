import React from "react";
import { useLogin } from "../components/LoginContext";
import { api } from "../utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const defaultContactFormData = {
  name: "",
  email: "",
  message: "",
};

function ContactUs() {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user } = useLogin();

  if (userData && user) {
    setContact({
      name: user.name,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const navigate = useNavigate();

  // handling the input values
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/form/contact", contact);
      if (response) {
        setContact(defaultContactFormData);
        Swal.fire({
          title: "Success",
          text: "Message sent successfully",
          icon: "success",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-[20vh]  text-gray-800 flex flex-col items-center justify-center relative mt-20 p-5">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-lg mt-4">
            We're here to help! Reach out to us for any inquiries or support.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="w-[100%] container bg-gradient-to-r from-green-500 to-blue-500  rounded-lg p-10 mx-auto text-center">
          <h2 className="text-3xl font-semibold text-black">
            Send Us a Message
          </h2>
          <p className="mt-4 text-lg text-white max-w-3xl mx-auto">
            Have a question or suggestion? Fill out the form below, and we'll
            get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-50 p-8 rounded-lg shadow-xl">
            {/* Name Input */}
            <div>
              <label className="block text-left text-black">Your Name</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                autoComplete="off"
                value={contact.name}
                // onChange={handleInput}
                readOnly
                required
                className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-left text-black">Your Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                autoComplete="off"
                value={contact.email}
                // onChange={handleInput}
                readOnly
                required
                className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Message Input */}
            <div className="col-span-2">
              <label className="block text-left text-black">Your Message</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Message"
                id="message"
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                required
                className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="bg-green-700 text-white py-3 px-8 mt-6 rounded-full text-xl hover:bg-green-800 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Address</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            You can visit or mail us at the following address:
          </p>
          <div className="mt-8">
            <p className="text-xl text-gray-800">
              123 Green Street, Eco City, 12345
            </p>
            <p className="text-xl text-gray-800 mt-2">
              Email: contact@scrapsathi.com
            </p>
            <p className="text-xl text-gray-800 mt-2">Phone: +1 234 567 890</p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      {/* <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold">Follow Us</h3>
          <p className="mt-4 text-lg">
            Stay connected with us on social media for the latest updates and
            news.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
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
      </section> */}
    </div>
  );
}

export default ContactUs;
