import { useState } from "react";
import {
  ArrowPathIcon,
  TrashIcon,
  ArchiveBoxIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    contactNo: "",
    userType: "individual", // Default value
    password: "",
    confirmPassword: "",
    termsAccepted: false, // Checkbox state
  });

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data Submitted", registerData);
  };

  return (
    <div className="relative bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center min-h-screen">
      {/* Main Form */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96 z-10 relative top-10 mt-20 mb-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Register for ScrapSaathi
        </h2>

        {/* Registration Form */}
        <form onSubmit={handleRegisterSubmit}>
          <div className="mb-4 flex items-center border rounded-lg p-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleRegisterChange}
              className="w-full focus:outline-none"
              required
            />
          </div>

          <div className="mb-4 flex items-center border rounded-lg p-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleRegisterChange}
              className="w-full focus:outline-none "
              required
            />
          </div>

          <div className="mb-4 flex items-center border rounded-lg p-3">
            <input
              type="text"
              name="contactNo"
              placeholder="Contact Number"
              onChange={handleRegisterChange}
              className="w-full focus:outline-none "
              required
            />
          </div>

          <div className="mb-4 flex items-center border rounded-lg p-3">
            <select
              name="userType"
              onChange={handleRegisterChange}
              className="w-full focus:outline-none "
              required
            >
              <option value="individual">User Type Select</option>
              <option value="individual">Individual</option>
              <option value="corporate">Corporate</option>
            </select>
          </div>

          <div className="mb-4 flex items-center border rounded-lg p-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleRegisterChange}
              className="w-full focus:outline-none "
              required
            />
          </div>

          <div className="mb-6 flex items-center border rounded-lg p-3">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleRegisterChange}
              className="w-full focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              name="termsAccepted"
              onChange={handleRegisterChange}
              checked={registerData.termsAccepted}
              className="h-4 w-4 text-green-500 border-gray-300 rounded"
              required
            />
            <label className="text-sm text-gray-600 ml-2">
              I agree to the{" "}
              <a href="#" className="text-green-500">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-sm text-gray-600 text-center">
          <p>
            Already have an account?{" "}
            <a href="#" className="text-green-500">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
