import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import Swal from "sweetalert2";
import {
  ArrowPathIcon,
  TrashIcon,
  ArchiveBoxIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email:"",
    phone: "",
    usertype: "individual",
    password: "",
    otp: "",
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!/^[a-zA-Z0-9._%+-]+@(gmail.com|.*\.gmail.com)$/.test(registerData.email)) {
      Swal.fire({ title: "Error", text: "Please enter a valid email ID.", icon: "error" });
      return;
    }

    try {
      const res = await api.post("/auth/register", registerData);
      if (res.status === 201) {
        Swal.fire({ title: "Success", text: "Registration successful", icon: "success" });
        navigate("/login", { state: { email: registerData.email } });
      }
    } catch (err) {
      Swal.fire({ title: "Error", text: "Email already registered", icon: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendOTP = async () => {
    if (!registerData.email) {
      Swal.fire({ title: "Error", text: "Enter your email first!", icon: "error" });
      return;
    }
    try {
      // await api.post("/otp/user-otp", { email: registerData.email });
      const res = await api.post(`/otp/user-otp`, {email:registerData.email},{withCredentials: true,headers: {
        "Content-Type": "application/json",
    },});
      console.log(res.data);
      if (res.status === 200) {
        setIsSubmitting(false)
      }
      Swal.fire({ title: "Success", text: "OTP sent to your email", icon: "success" });
    } catch (err) {
      console.log(err);
      Swal.fire({ title: "Error", text: "Failed to send OTP", icon: "error" });
    }
  };

    // Icons to be scattered
    const icons = [
      <ArrowPathIcon className="w-16 h-16 text-white opacity-40" />,
      <TrashIcon className="w-16 h-16 text-white opacity-40" />,
      <ArchiveBoxIcon className="w-16 h-16 text-white opacity-40" />,
      <HandThumbUpIcon className="w-16 h-16 text-white opacity-40" />,
    ];


  return (
    <div className="relative bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center min-h-screen">
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

      <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96 z-10 mt-20 mb-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Register for ScrapSaathi
        </h2>

        <form onSubmit={handleRegisterSubmit}>
          {/* Name Input */}
          <div className="mb-4 flex items-center border rounded-lg p-3">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={registerData.name}
              onChange={handleRegisterChange}
              disabled={isSubmitting}
              className="w-full focus:outline-none"
              required
            />
          </div>

          {/* Email Input with Send OTP Button */}
          <div className="mb-4 flex items-center border rounded-lg p-3 relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registerData.email}
              onChange={handleRegisterChange}
              disabled={isSubmitting}
              className="w-full focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={handleSendOTP}
              className="absolute right-3 text-green-600 hover:text-green-800 text-sm font-semibold"
            >
              Send OTP
            </button>
          </div>

          {/* Phone Input */}
          <div className="mb-4 flex items-center border rounded-lg p-3">
            <input
              type="number"
              name="phone"
              placeholder="Contact Number"
              value={registerData.phone}
              onChange={handleRegisterChange}
              className="w-full focus:outline-none"
              required
            />
          </div>

          {/* User Type Dropdown */}
          <div className="mb-4 flex items-center border rounded-lg p-3">
            <select
              name="usertype"
              onChange={handleRegisterChange}
              value={registerData.usertype}
              className="w-full focus:outline-none"
              required
            >
              <option value="individual">User Type Select</option>
              <option value="individual">Individual</option>
              <option value="corporate">Corporate/Organization</option>
            </select>
          </div>

          {/* Password Input with Eye Icon */}
          <div className="mb-4 flex items-center border rounded-lg p-3 relative">
            <input
              className="w-full focus:outline-none"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={registerData.password}
              onChange={handleRegisterChange}
              required
            />
            <span
              className="absolute right-3 text-gray-600 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>

          {/* OTP Input with Eye Icon */}
          <div className="mb-4 flex items-center border rounded-lg p-3 relative">
            <input
              className="w-full focus:outline-none"
              type={showOTP ? "text" : "password"}
              name="otp"
              placeholder="OTP"
              value={registerData.otp}
              onChange={handleRegisterChange}
              required
            />
            <span
              className="absolute right-3 text-gray-600 cursor-pointer"
              onClick={() => setShowOTP(!showOTP)}
            >
              {showOTP ? "👁️" : "🙈"}
            </span>
          </div>

          {/* Terms and Conditions Checkbox */}
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
              <a href="/privacy-policy" className="text-green-500">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-sm text-gray-600 text-center">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-green-500">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
