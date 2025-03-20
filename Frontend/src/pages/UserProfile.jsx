import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import {
  ArrowPathIcon,
  TrashIcon,
  ArchiveBoxIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";



export default function EditProfile() {
  const [userData, setUserData] = useState({
    name: "kajdf",
    email: "kldjf",
    phone: "984u",
    type: "individual", // Dummy user type
    businessName: "823498",
    licenseNumber: "29308",
    address: "oaisdjfoajsdf",
    profilePhoto: "https://via.placeholder.com/150", // Default profile photo
  });
  const [saving, setSaving] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => setSaving(false), 1000); // Simulating API call
  };

  const sendOtp = () => {
    setIsOtpSent(true);
    setOtp("123456"); // Simulating OTP generation
  };

  const verifyOtp = () => {
    if (otp === "123456") {
      setIsOtpVerified(true);
      setIsOtpSent(false);
    }
  };

    const icons = [
        <ArrowPathIcon className="w-16 h-16 text-white opacity-40" />,
        <TrashIcon className="w-16 h-16 text-white opacity-40" />,
        <ArchiveBoxIcon className="w-16 h-16 text-white opacity-40" />,
        <HandThumbUpIcon className="w-16 h-16 text-white opacity-40" />,
      ];
  return (
    <div className="relative  bg-gradient-to-r from-green-500 to-blue-500 animate-gradientBackground flex items-center justify-center min-h-screen">
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

      <div className="m-12 mt-32 max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 relative z-10">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Edit Profile
        </h2>

        <div className="flex justify-center mb-4 relative">
          <img
            src={userData.profilePhoto}
            alt="Profile"
            className="relative w-24 h-24 rounded-full border-2 border-gray-300 shadow-md"
          />
          <label
            htmlFor="profilePhoto"
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full cursor-pointer hover:bg-blue-600 border-2 border-white shadow transform translate-x-1/2 translate-y-1/2"
          >
            <FiEdit2 size={16} />
          </label>
          <input
            id="profilePhoto"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border rounded bg-white shadow-sm "
          />
          <div className="relative mb-4 border rounded">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
              required
              autoComplete="off"
              className="w-full p-3 border-none rounded pr-20"
            />
            <button
              type="button"
              onClick={sendOtp}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-800 text-sm font-semibold"
            >
              Send OTP
            </button>
          </div>
          {isOtpSent && (
            <div className="relative mb-4 border rounded flex space-x-2">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full p-3 border-none rounded pr-20"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-800 text-sm font-semibold"
                onClick={verifyOtp}
              >
                Verify OTP
              </button>
            </div>
          )}
          {isOtpVerified && <p className="text-green-600">Email Verified ✔</p>}

          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 border rounded bg-white shadow-sm "
          />

          <textarea
            name="address"
            value={userData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-3 border rounded resize-none bg-white shadow-sm h-24 "
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded font-semibold hover:bg-green-700 shadow"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}
