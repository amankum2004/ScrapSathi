import { useState } from "react";
import { useLogin } from "../components/LoginContext";
import {api} from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function PickupRequestForm() {
  const navigate = useNavigate();
  const { user } = useLogin();
  const [formData, setFormData] = useState({
    userId: user?.userId,
    wasteType: "eWaste",
    quantity: "",
    photo: null,
    address: "",
    preferredTimeSlot: "morning",
    subcategory: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

    const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData({ ...formData, photo: reader.result });
    };
  };

  const handleLocationFetch = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData({
            ...formData,
            address: `Lat: ${latitude}, Long: ${longitude}`,
          });
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Unable to fetch location. Please enter manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      await api.post("/pickup/request", data);
      alert("Pickup Request Submitted Successfully");
      setFormData({
        wasteType: "eWaste",
        quantity: "",
        photo: null,
        address: "",
        preferredTimeSlot: "morning",
        subcategory: "",
      });
      navigate('/individualDashboard');
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to Submit Request");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center p-6 mt-20">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Raise a Pickup Request</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block font-medium mb-2">Select Waste Type</label>
            <select
              name="wasteType"
              value={formData.wasteType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="eWaste">E-Waste</option>
              <option value="metalWaste">Metal Waste</option>
              <option value="plasticWaste">Plastic Waste</option>
              <option value="cardboardWaste">Cardboard Waste</option>
              <option value="glassWaste">Glass Waste</option>
              <option value="others">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Waste subcategory</label>
            <input
              type="text"
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              placeholder="Enter waste subcategory"
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block font-medium mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your pickup address"
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mb-6">
            <button
              type="button"
              onClick={handleLocationFetch}
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Use Current Location
            </button>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Preferred Time Slot</label>
            <select
              name="preferredTimeSlot"
              value={formData.preferredTimeSlot}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="morning">Morning (8 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
              <option value="evening">Evening (4 PM - 8 PM)</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Estimated Quantity(Wt. in KG)</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter quantity in kg"
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Upload Photo (Optional)</label>
            <input
              type="file"
              name="photo"
              onChange={handleImageUpload}
              accept="image/*"
              className="w-full p-3 border rounded-lg"
              />
              {formData.photo && <img src={formData.photo} alt="Uploaded" className="w-24 h-24 mt-2 rounded" />}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}


