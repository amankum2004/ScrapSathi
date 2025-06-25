import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { api } from '../utils/api';

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { email } = formData;
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post(`/otp/send-otp`, {
                email,
            });
            if (res.status === 200) {
                setIsSubmitting(false);
                navigate('/updatePassword', { state: { email: formData.email } })
                // } 
            }
        } catch (err) {
            if (err.response.status === 401) {
                Swal.fire({ title: "Error", text: "User does not exist please sign up", icon: "error" });
            } else if (err.response.status === 500) {
                Swal.fire({ title: "Error", text: "Internal server error", icon: "error" });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-lime-100 px-4">
            <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
                <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Forgot Password</h2>
                <p className="text-gray-600 text-center mb-8">Enter your registered email to receive a reset link.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            value={email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <button
                        disabled={isSubmitting}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                        // className="w-full h-10 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition duration-200"
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
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

export default ForgotPassword;
