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
    email: "kldjf@example.com",
    phone: "984u",
    type: "individual", // "individual", "waste-collector", "big-organization", "recycle-companies"
    businessName: "",
    licenseNumber: "",
    address: "oaisdjfoajsdf",
    profilePhoto: "https://via.placeholder.com/150", // Default profile photo
  });
  const [saving, setSaving] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [emailError, setEmailError] = useState(""); // <mark>UPDATED: Email error state added</mark>

  // const handleChange = (e) => {
  //   if (e.target.name === "email") {
  //     setIsOtpVerified(false); // <mark>UPDATED: Reset OTP verification when email changes</mark>
  //   }
  //   setUserData({ ...userData, [e.target.name]: e.target.value });
  // };

  const handleChange = (e) => {
    // If the email is changed, require new verification.
    if (e.target.name === "email") {
      setIsOtpVerified(false);
    }
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
    // Save button is only enabled when OTP is verified.
    if (!isOtpVerified) return;
    setSaving(true);
    setTimeout(() => setSaving(false), 1000); // Simulate API call
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendOtp = () => {
    if (!validateEmail(userData.email)) {
      setEmailError("Please enter a valid email address."); // <mark>UPDATED: Set error message if invalid</mark>
      return;
    }
    setEmailError(""); // <mark>UPDATED: Clear error message if valid</mark>
    setIsOtpSent(true);
    setOtp(""); // Simulated OTP generation
    setIsOtpVerified(false);
  };

  const verifyOtp = () => {
    if (otp === "123456") {
      setIsOtpVerified(true);
    }
  };

  const icons = [
    <ArrowPathIcon className="w-16 h-16 text-white opacity-40" />,
    <TrashIcon className="w-16 h-16 text-white opacity-40" />,
    <ArchiveBoxIcon className="w-16 h-16 text-white opacity-40" />,
    <HandThumbUpIcon className="w-16 h-16 text-white opacity-40" />,
  ];

  // Determine whether additional fields should be shown based on user type.
  const showBusinessFields =
    userData.type === "waste-collector" ||
    userData.type === "big-organization" ||
    userData.type === "recycle-companies";

  // For "big-organization" and "recycle-companies", businessName and licenseNumber are required.
  const isBusinessRequired =
    userData.type === "big-organization" ||
    userData.type === "recycle-companies";

  return (
    <div className="relative bg-gradient-to-r from-green-500 to-blue-500 animate-gradientBackground flex items-center justify-center min-h-screen">
      {/* Background Icons */}
      <div className="absolute inset-0">
        <div className="absolute top-24 right-8">{icons[1]}</div>
        <div className="absolute top-20 left-20">{icons[2]}</div>
        <div className="absolute bottom-20 right-16">{icons[0]}</div>
        <div className="absolute bottom-10 left-24">{icons[1]}</div>
        <div className="absolute bottom-30 right-12">{icons[2]}</div>
        <div className="absolute top-64 right-24">{icons[2]}</div>
        <div className="absolute top-72 left-12">{icons[3]}</div>
      </div>

      <div className="m-12 mt-32 max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 relative z-10">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Edit Profile
        </h2>

        <div className="flex flex-col items-center mb-4 relative">
          <div className="relative">
            <img
              src={userData.profilePhoto}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300 shadow-md"
            />
            <label
              htmlFor="profilePhoto"
              className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 border-2 border-white"
              style={{
                transform: "translate(25%, 25%)", // Adjust position as needed
              }}
            >
              <FiEdit2 size={16} />
            </label>
          </div>
          <input
            id="profilePhoto"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* User type selection */}
          <div className="flex flex-col">
            <label htmlFor="type" className="mb-1 font-medium text-gray-600">
              User Type
            </label>
            <select
              name="type"
              id="type"
              value={userData.type}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-white shadow-sm"
            >
              <option value="individual">Individual</option>
              <option value="waste-collector">Waste Collector</option>
              <option value="big-organization">Big Organization</option>
              <option value="recycle-companies">Recycle Companies</option>
            </select>
          </div>

          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border rounded bg-white shadow-sm"
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
              className="w-full p-3 border-none rounded pr-28"
            />
            <button
              type="button"
              onClick={sendOtp}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-800 text-sm font-semibold"
            >
              Send OTP
            </button>
          </div>

          {/* OTP Input Always Visible */}
          {isOtpSent && (
            <>
              <div className="relative mb-4 border transition-all duration-700 ease-in-out rounded">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full p-3 border-none rounded pr-28"
                />
                <button
                  type="button"
                  onClick={verifyOtp}
                  disabled={isOtpVerified}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-sm font-semibold ${
                    isOtpVerified
                      ? "text-gray-400 cursor-default"
                      : "text-green-600 hover:text-green-800"
                  }`}
                >
                  {isOtpVerified ? "Verified" : "Verify OTP"}
                </button>
              </div>
            </>
          )}

          {/* {isOtpVerified && <p className="text-green-600">Email Verified ✔</p>} */}

          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 border rounded bg-white shadow-sm"
          />

          {/* Render additional fields if the user type requires business details */}
          {showBusinessFields && (
            <>
              <input
                type="text"
                name="businessName"
                value={userData.businessName}
                onChange={handleChange}
                placeholder="Business Name"
                className="w-full p-3 border rounded bg-white shadow-sm"
                required={isBusinessRequired}
              />
              <input
                type="text"
                name="licenseNumber"
                value={userData.licenseNumber}
                onChange={handleChange}
                placeholder="License Number"
                className="w-full p-3 border rounded bg-white shadow-sm"
                required={isBusinessRequired}
              />
            </>
          )}

          <textarea
            name="address"
            value={userData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-3 border rounded resize-none bg-white shadow-sm h-24"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded font-semibold hover:bg-green-700 shadow disabled:opacity-50"
            disabled={saving || !isOtpVerified}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}
