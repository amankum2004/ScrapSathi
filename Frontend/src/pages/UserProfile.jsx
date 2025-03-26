import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ProfileViewGridBoxes() {
  const navigate = useNavigate();

  // Convert userData to state so that profilePhoto can be updated.
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    type: "individual", // Options: "individual", "waste-collector", "big-organization", "recycle-companies"
    businessName: "Doe Enterprises",
    licenseNumber: "LIC-12345",
    address: "123 Main St, City, Country",
    profilePhoto: "https://via.placeholder.com/150",
  });

  // This function is used to update the profile picture.
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Use navigate to redirect to the edit profile page.
  const handleEdit = () => {
    navigate("/EditProfile"); // Ensure this route is defined in your router.
  };

  // Display additional fields only for non-individual types.
  const showBusinessFields =
    userData.type === "waste-collector" ||
    userData.type === "big-organization" ||
    userData.type === "recycle-companies";

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      {/* Header Section */}
      <div className="relative mt-28 pt-12 rounded-t-lg bg-gradient-to-r from-blue-500 to-green-500 w-full max-w-4xl h-56 flex items-center justify-center">
        <div className="relative">
          <img
            src={userData.profilePhoto}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          {/* Hidden file input for profile photo update */}
          <input
            type="file"
            id="photoInput"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
          {/* Label triggers file input dialog */}
          <label
            htmlFor="photoInput"
            title="Edit Profile Picture"
            className="absolute bottom-24 right-4 bg-white rounded-full p-1 shadow-md cursor-pointer"
          >
            <FiEdit2 className="text-blue-500" size={16} />
          </label>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              {userData.name}
            </h1>
            <p className="text-gray-600">{userData.type}</p>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-xl p-8 pt-20 mt-[-40px] w-full max-w-4xl">
        {/* Grid of Boxes for Profile Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          {/* Email Box */}
          <div className="border p-4 rounded-lg w-full max-w-[300px] text-left">
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg text-gray-800">{userData.email}</p>
          </div>
          {/* Phone Box */}
          <div className="border p-4 rounded-lg w-full max-w-[300px] text-left">
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-lg text-gray-800">{userData.phone}</p>
          </div>
          {/* User Type Box */}
          <div className="border p-4 rounded-lg w-full max-w-[300px] text-left">
            <p className="text-sm text-gray-500">User Type</p>
            <p className="text-lg text-gray-800">{userData.type}</p>
          </div>
          {/* Address Box */}
          <div className="border p-4 rounded-lg w-full max-w-[300px] text-left">
            <p className="text-sm text-gray-500">Address</p>
            <p className="text-lg text-gray-800">{userData.address}</p>
          </div>
          {/* Business Details (if applicable) */}
          {showBusinessFields && (
            <>
              <div className="border p-4 rounded-lg w-full max-w-[300px] text-left">
                <p className="text-sm text-gray-500">Business Name</p>
                <p className="text-lg text-gray-800">{userData.businessName}</p>
              </div>
              <div className="border p-4 rounded-lg w-full max-w-[300px] text-left">
                <p className="text-sm text-gray-500">License Number</p>
                <p className="text-lg text-gray-800">
                  {userData.licenseNumber}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Bottom Edit Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleEdit}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
