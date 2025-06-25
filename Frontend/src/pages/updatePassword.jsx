import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { api } from "../utils/api";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UpdatePassword = () => {
    const location = useLocation();
    const otpEmail = location.state?.email ?? "";
    const [formData, setFormData] = useState({
        email: localStorage.getItem("forgotpassEmail") || otpEmail || "",
        password: "",
        otp: "",
    });

    const { email, password, otp } = formData;
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showOTP, setShowOTP] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleOTPVisibility = () => {
        setShowOTP(!showOTP);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post(`/auth/update`, formData);
            if (res.data.success) {
                localStorage.removeItem("forgotpassEmail");
                Swal.fire({ title: "Success", text: "Password updated successfully", icon: "success" });
                navigate("/login");
            } else {
                console.error("failed to save");
            }
        } catch (err) {
            Swal.fire({ title: "Error", text: "Invalid OTP", icon: "error" });
        }
    };

    return (
        <div className="min-h-screen  mt-10 flex items-center justify-center bg-gradient-to-r from-emerald-100 to-green-100 px-4">
            <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
                <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Update Your Password</h2>
                <p className="text-gray-600 text-center mb-6">Enter your OTP and a New Password.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            readOnly
                            value={email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400"
                            placeholder="Email"
                        />
                    </div>

                    <div>
                        <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
                        <input
                            type={showOTP ? "text" : "password"}
                            id="otp"
                            name="otp"
                            required
                            value={otp}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400"
                            placeholder="Enter OTP"
                        />
                        <span
                            // className="absolute right-3 top-2 cursor-pointer"
                            onClick={toggleOTPVisibility}
                        >
                            {showOTP ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                        </span>
                    </div>

                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400"
                            placeholder="New password"
                        />
                        <span
                            // className="absolute right-3 top-2 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                    >
                        Update Password
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <a href="/login" className="text-sm text-green-600 hover:underline">
                        Back to Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UpdatePassword;
