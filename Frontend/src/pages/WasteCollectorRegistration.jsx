import { useState } from "react";
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

export default function RegisterWasteRoles({
  userType: propUserType = "individual",
}) {
  const [userType, setUserType] = useState(propUserType); // Initialize state properly

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    otp: "",
    termsAccepted: false,
    companyName: userType !== "individual" ? "" : undefined,
    businessLicenseNo: userType !== "individual" ? "" : undefined,
    wasteType: userType === "big-organization" ? "" : undefined,
    recyclingCapabilities: userType === "recycle-company" ? "" : undefined,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  //   const [userType, setUserType] = useState(propUserType); // Set initial state from props

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

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        registerData.email
      )
    ) {
      Swal.fire({
        title: "Error",
        text: "Please enter a valid email ID.",
        icon: "error",
      });
      setIsSubmitting(false);
      return;
    }
    try {
      const res = await api.post("/auth/register", {
        ...registerData,
        userType,
      });
      if (res.status === 201) {
        Swal.fire({
          title: "Success",
          text: "Registration successful",
          icon: "success",
        });
        navigate("/login", { state: { email: registerData.email } });
      }
    } catch (err) {
      Swal.fire({ title: "Error", text: "Registration failed", icon: "error" });
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendOTP = async () => {
    if (!registerData.email) {
      Swal.fire({
        title: "Error",
        text: "Enter your email first!",
        icon: "error",
      });
      return;
    }
    try {
      const res = await api.post(
        `/otp/user-otp`,
        { email: registerData.email },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(res.data);
      if (res.status === 200) {
        setIsSubmitting(false);
      }
      Swal.fire({
        title: "Success",
        text: "OTP sent to your email",
        icon: "success",
      });
    } catch (err) {
      console.log(err);
      Swal.fire({ title: "Error", text: "Failed to send OTP", icon: "error" });
    }
    };
    
    const handleVerifyOTP = async () => {
      if (!registerData.otp) {
        alert("Please enter OTP");
        return;
      }

      try {
        const response = await fetch("https://your-backend.com/verify-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: registerData.email, // Using email for verification
            otp: registerData.otp,
          }),
        });

        const data = await response.json();

        if (data.success) {
          alert("OTP Verified Successfully");
          setRegisterData({ ...registerData, otpVerified: true }); // Mark as verified
        } else {
          alert("Invalid OTP. Please try again.");
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        alert("Something went wrong. Try again later.");
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {/* Background Icons */}
      <div className="inset-0">
        <div className="absolute top-24 right-8">{icons[1]}</div>
        <div className="absolute top-20 left-20">{icons[2]}</div>
        <div className="absolute bottom-20 right-16">{icons[0]}</div>
        <div className="absolute bottom-10 left-24">{icons[1]}</div>
        <div className="absolute bottom-30 right-12">{icons[2]}</div>
        <div className="absolute top-64 right-24">{icons[2]}</div>
        <div className="absolute top-72 left-12">{icons[3]}</div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 mt-20 w-full sm:w-96">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center z-10 mt-2 mb-20">
          Register as {userType.replace("-", " ")}
        </h2>
        <form onSubmit={handleRegisterSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={registerData.name}
            onChange={handleRegisterChange}
            required
            autoComplete="off"
            className="w-full p-2 mb-3 border rounded"
          />
          <div className="relative mb-4 border rounded">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registerData.email}
              onChange={handleRegisterChange}
              required
              autoComplete="off"
              className="w-full p-2 border-none rounded pr-20"
            />
            <button
              type="button"
              onClick={handleSendOTP}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-800 text-sm font-semibold"
            >
              Send OTP
            </button>
          </div>

          {/* <div class="mb-4 flex items-center border rounded-lg relative">
        <input placeholder="Email" required="" class="w-full p-2 pr-0 border-none rounded" type="email" value="crazyyjgjhgggggggggggggggggggggggggggggggggggggggggggghhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" name="email">
</div> */}
          {registerData.email && (
            <div className="relative mb-4 border rounded">
              <input
                type="text"
                placeholder="Enter OTP"
                value={registerData.otp}
                className="w-full p-2 border rounded"
                onChange={(e) =>
                  setRegisterData({ ...registerData, otp: e.target.value })
                }
              />
              <button
                type="button"
                onClick={handleVerifyOTP}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 
        ${
          registerData.otpVerified
            ? "text-green-600"
            : "text-blue-600 hover:text-blue-800"
        }
        text-sm font-semibold`}
              >
                {registerData.otpVerified ? "✅" : "Verify OTP"}
              </button>
            </div>
          )}

          <input
            type="number"
            name="phone"
            placeholder="Phone"
            value={registerData.phone}
            onChange={handleRegisterChange}
            required
            autoComplete="off"
            className="w-full p-2 mb-3 border rounded"
          />
          <select
            name="userType"
            value={userType}
            placeholder="Select User Type"
            onChange={(e) => setUserType(e.target.value)}
            required
            className="w-full p-2 mb-3 border rounded"
          >
            {/* <option value="" className="text-zinc-400">Select User Type</option> */}
            <option value="individual">Individual</option>
            <option value="waste-collector">Waste Collector</option>
            <option value="big-organization">Big Organization</option>
            <option value="recycle-company">Recycle Company</option>
          </select>

          {userType === "waste-collector" && (
            <>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name (Optional)"
                value={registerData.companyName}
                onChange={handleRegisterChange}
                autoComplete="off"
                className="w-full p-2 mb-3 border rounded"
              />
              <input
                type="text"
                name="businessLicenseNo"
                placeholder="Business License No (Optional)"
                value={registerData.businessLicenseNo}
                onChange={handleRegisterChange}
                className="w-full p-2 mb-3 border rounded"
              />
            </>
          )}

          {userType !== "waste-collector" && userType !== "individual" && (
            <>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={registerData.companyName}
                onChange={handleRegisterChange}
                autoComplete="off"
                className="w-full p-2 mb-3 border rounded"
              />
              <input
                type="text"
                name="businessLicenseNo"
                placeholder="Business License No"
                value={registerData.businessLicenseNo}
                onChange={handleRegisterChange}
                className="w-full p-2 mb-3 border rounded"
              />
            </>
          )}

          {userType === "big-organization" && (
            <input
              type="text"
              name="wasteType"
              placeholder="Waste Type"
              value={registerData.wasteType}
              onChange={handleRegisterChange}
              required
              className="w-full p-2 mb-3 border rounded"
            />
          )}
          {userType === "recycle-company" && (
            <input
              type="text"
              name="recyclingCapabilities"
              placeholder="Recycling Capabilities"
              value={registerData.recyclingCapabilities}
              onChange={handleRegisterChange}
              required
              className="w-full p-2 mb-3 border rounded"
            />
          )}
          <div className="relative w-full">
            <style>
              {`
          input::-ms-reveal,
          input::-ms-clear {
            display: none;
          }
        `}
            </style>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={registerData.password}
              onChange={handleRegisterChange}
              required
              autoComplete="off"
              className="w-full p-2  border rounded pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="flex items-center mb-3">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={registerData.termsAccepted}
              onChange={handleRegisterChange}
              required
              autoComplete="off"
              className="mr-2"
            />
            <label>I agree to the Terms and Conditions</label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded"
            disabled={isSubmitting}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
