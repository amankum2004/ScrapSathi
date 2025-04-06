import React, { useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../utils/api";

export default function ProfileViewGridBoxes() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    address: "",
    companyName: "",
    businessLicenseNo: "",
    wasteType: "",
    recyclingCapabilities:"",
    profilePhoto: "",
  });

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // console.log("Stored Token:", localStorage.getItem("token"));
        const response = await api.get('/auth/profile', {
          withCredentials: true, // Send cookies if using authentication
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure token is stored in localStorage
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Navigate to edit profile page
  const handleEdit = () => {
    navigate("/editProfile");
  };

  // Show additional fields for non-individual user types
  const showBusinessFields = ["waste-collector", "big-organization", "recycle-companies"].includes(userData.userType);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      {/* Header Section */}
      <div className="relative mt-28 pt-12 rounded-t-lg bg-gradient-to-r from-blue-500 to-green-500 w-full max-w-4xl h-56 flex items-center justify-center">
        <div className="relative">
          <img
            src={userData.profilePhoto || "/images/dp_logo.jpg"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">{userData.name || "Loading..."}</h1>
            <p className="text-gray-600">{userData.userType || "Loading..."}</p>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-xl p-8 pt-20 mt-[-40px] w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          <ProfileDetail title="Email" value={userData.email} />
          <ProfileDetail title="Phone" value={userData.phone} />
          <ProfileDetail title="User Type" value={userData.userType} />
          <ProfileDetail title="Address" value={userData.address} />
          {showBusinessFields && (
            <>
              <ProfileDetail title="License Number" value={userData.companyName} />
              <ProfileDetail title="Business Name" value={userData.businessLicenseNo} />
            </>
          )}
        </div>

        {/* Edit Profile Button */}
        <div className="flex justify-center mt-8">
          <button onClick={handleEdit} className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable Profile Detail Component
const ProfileDetail = ({ title, value }) => (
  <div className="border p-4 rounded-lg w-full max-w-[300px] text-left">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-lg text-gray-800">{value || "Not Available"}</p>
  </div>
);
