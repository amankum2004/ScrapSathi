import { useState } from "react";
import {
  ArrowPathIcon,
  TrashIcon,
  ArchiveBoxIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data Submitted", loginData);
  };

  // Icons to be scattered
  const icons = [
    <ArrowPathIcon className="w-16 h-16 text-white opacity-40" />,
    <TrashIcon className="w-16 h-16 text-white opacity-40" />,
    <ArchiveBoxIcon className="w-16 h-16 text-white opacity-40" />,
    <HandThumbUpIcon className="w-16 h-16 text-white opacity-40" />,
  ];

  return (
    <div className="relative bg-gradient-to-r from-green-500 to-blue-500 animate-gradientBackground flex items-center justify-center min-h-screen">
      {/* Background Icons */}
      <div className="absolute inset-0">
        {/* <div className="absolute top-10 left-5">{icons[0]}</div> */}
        <div className="absolute top-24 right-8">{icons[1]}</div>
        <div className="absolute top-20 left-20">{icons[2]}</div>
        {/* <div className="absolute top-52 left-12">{icons[3]}</div> */}
        <div className="absolute bottom-20 right-16">{icons[0]}</div>
        <div className="absolute bottom-10 left-24">{icons[1]}</div>
        <div className="absolute bottom-30 right-12">{icons[2]}</div>
        {/* <div className="absolute bottom-8 left-40">{icons[3]}</div> */}
        {/* <div className="absolute top-48 left-40">{icons[0]}</div> */}
        <div className="absolute top-64 right-24">{icons[2]}</div>
        {/* <div className="absolute bottom-40 left-5">{icons[2]}</div> */}
        <div className="absolute top-72 left-12">{icons[3]}</div>
      </div>

      {/* Main Form */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Login to ScrapSaathi
        </h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleLoginChange}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleLoginChange}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Forgot Password & Create Account Links */}
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <a href="/forgotPassword" className="hover:text-green-500">
            Forgot Password?
          </a>
          <a href="/register" className="hover:text-green-500">
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}
