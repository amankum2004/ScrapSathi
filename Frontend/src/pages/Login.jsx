import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  ArrowPathIcon,
  TrashIcon,
  ArchiveBoxIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { useLogin } from "../components/LoginContext";

export default function Login() {
  const { login } = useLogin();
  const [, setClicked] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword((prevState) => !prevState);
  // };
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     loggedIn; // Update login status in context if token exists
  //     navigate("/"); // Redirect to home if already logged in
  //   }
  // }, [loggedIn, navigate]);

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form submission
    setIsSubmitting(true);
    try {
      const response = await api.post('/auth/login', formData); // Corrected formData usage
      // console.log("response:", response);
      // console.log("Raw response:", response.data.token);
      if (response.status === 200 && response.data.token) {
        login(response.data.token); // Store token & update state
      } else {
        alert("Invalid credentials");
      }
      
    } catch (err) {
      if (err.response.status === 404) {
        Swal.fire({ title: "Error", text: "User not found", icon: "error" });
      } else if (err.response.status === 401) {
        Swal.fire({ title: "Error", text: "Email or password is wrong", icon: "error" });
      } else {
        Swal.fire({ title: "Error", text: "Internal server error", icon: "error" });
      }
      setIsSubmitting(false);  // Reset submission state
    }
  };
  

  useEffect(() => {
    document.onkeydown = async (e) => {
      if (e.key === "Enter") {
        setClicked(true);
        await handleSubmit(e); // Corrected: pass the event
        Swal.fire({ title: "Success", text: "Login successful", icon: "success" });
        // navigate("/login");
      }
    };
  }, [formData, navigate]);


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
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleInput}
              disabled={isSubmitting}
              value={formData.email}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Password Input with Eye Icon */}
          <div className="mb-4 flex items-center border rounded-lg p-3 relative">
            <input
              className="w-full focus:outline-none"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInput}
              required
            />
            <span
              className="absolute right-3 text-gray-600 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </span>
          </div>

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


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../utils/api";
// import Swal from "sweetalert2";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useLogin } from "../components/LoginContext";

// export default function Login() {
//   const { loggedIn, login } = useLogin();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: localStorage.getItem("signupEmail") || "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/"); // Redirect if already logged in
//     }
//   }, [navigate]);

//   const handleInput = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const response = await api.post("/auth/login", formData);
//       if (response.status === 200) {
//         const { token } = response.data;
//         localStorage.setItem("token", token);
//         login(response.data); // Update login state
//         Swal.fire("Success", "Login successful!", "success");
//         navigate("/");
//       }
//     } catch (err) {
//       const errorMsg = err.response?.status === 404 ? "User not found" : 
//                       err.response?.status === 401 ? "Invalid email or password" : 
//                       "Internal server error";
//       Swal.fire("Error", errorMsg, "error");
//     }
//     setIsSubmitting(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-blue-500">
//       <div className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Login to ScrapSaathi</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleInput}
//             value={formData.email}
//             disabled={isSubmitting}
//             className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-green-500"
//             required
//           />
//           <div className="mb-4 flex items-center border rounded-lg p-3 relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               onChange={handleInput}
//               value={formData.password}
//               required
//               className="w-full focus:outline-none"
//             />
//             <span className="absolute right-3 text-gray-600 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
//               {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
//             </span>
//           </div>
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full p-3 rounded-lg transition duration-300 ${isSubmitting ? "bg-gray-400" : "bg-green-500 hover:bg-green-700 text-white"}`}
//           >
//             {isSubmitting ? "Logging in..." : "Login"}
//           </button>
//         </form>
//         <div className="mt-4 flex justify-between text-sm text-gray-600">
//           <a href="/forgotPassword" className="hover:text-green-500">Forgot Password?</a>
//           <a href="/register" className="hover:text-green-500">Create Account</a>
//         </div>
//       </div>
//     </div>
//   );
// }
