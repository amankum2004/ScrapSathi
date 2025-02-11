import { useState } from "react";

export default function SellWaste() {
  const [formData, setFormData] = useState({
    wasteType: "eWaste", // Default type
    quantity: "",
    photo: null,
    eWasteSubcategory: "batteries", // E-waste subcategory selected
    metalWasteSubcategory: "copper", // Metal waste subcategory selected
    plasticWasteSubcategory: "plastic", // Plastic waste subcategory selected
    cardboardWasteSubcategory: "cardboard", // Cardboard waste subcategory selected
    glassWasteSubcategory: "glass", // Glass waste subcategory selected
    otherWasteType: "", // If the user selects 'other', they can specify what it is
    otherSubcategory: "", // If the user selects 'other' in subcategory
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sell Waste Data Submitted", formData);
    // You can handle the data submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center p-6 mt-20">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Sell Your Waste
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Main Waste Type */}
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

          {/* Display "Other Waste Type" input if selected */}
          {formData.wasteType === "others" && (
            <div className="mb-6">
              <label className="block font-medium mb-2">
                Please specify the waste type
              </label>
              <input
                type="text"
                name="otherWasteType"
                value={formData.otherWasteType}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="e.g., Organic waste, Construction waste, etc."
                required
              />
            </div>
          )}

          {/* Subcategories based on Waste Type */}
          {formData.wasteType === "eWaste" && (
            <div className="mb-6">
              <label className="block font-medium mb-2">
                Select E-Waste Subcategory
              </label>
              <select
                name="eWasteSubcategory"
                value={formData.eWasteSubcategory}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="batteries">Batteries</option>
                <option value="circuits">Circuits & Wires</option>
                <option value="gadgets">Gadgets</option>
                <option value="appliances">Appliances</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}

          {formData.wasteType === "metalWaste" && (
            <div className="mb-6">
              <label className="block font-medium mb-2">
                Select Metal Waste Subcategory
              </label>
              <select
                name="metalWasteSubcategory"
                value={formData.metalWasteSubcategory}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="copper">Copper</option>
                <option value="iron">Iron</option>
                <option value="aluminium">Aluminium</option>
                <option value="steel">Steel</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}

          {formData.wasteType === "plasticWaste" && (
            <div className="mb-6">
              <label className="block font-medium mb-2">
                Select Plastic Waste Subcategory
              </label>
              <select
                name="plasticWasteSubcategory"
                value={formData.plasticWasteSubcategory}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="plastic">Plastic</option>
                <option value="bottles">Plastic Bottles</option>
                <option value="bags">Plastic Bags</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}

          {formData.wasteType === "cardboardWaste" && (
            <div className="mb-6">
              <label className="block font-medium mb-2">
                Select Cardboard Waste Subcategory
              </label>
              <select
                name="cardboardWasteSubcategory"
                value={formData.cardboardWasteSubcategory}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="cardboard">Cardboard</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}

          {formData.wasteType === "glassWaste" && (
            <div className="mb-6">
              <label className="block font-medium mb-2">
                Select Glass Waste Subcategory
              </label>
              <select
                name="glassWasteSubcategory"
                value={formData.glassWasteSubcategory}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="glass">Glass</option>
                <option value="bottles">Glass Bottles</option>
                <option value="windows">Glass Windows</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}

          {/* Display "Other Subcategory" input if selected */}
          {[
            "eWasteSubcategory",
            "metalWasteSubcategory",
            "plasticWasteSubcategory",
            "cardboardWasteSubcategory",
            "glassWasteSubcategory",
          ].map((category) => {
            if (formData[category] === "other") {
              return (
                <div className="mb-6" key={category}>
                  <label className="block font-medium mb-2">
                    Please specify the subcategory
                  </label>
                  <input
                    type="text"
                    name="otherSubcategory"
                    value={formData.otherSubcategory}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Specify the subcategory"
                  />
                </div>
              );
            }
            return null;
          })}

          {/* Quantity */}
          <div className="mb-6">
            <label className="block font-medium mb-2">Estimated Quantity</label>
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

          {/* Photo Upload */}
          <div className="mb-6">
            <label className="block font-medium mb-2">
              Upload Photo (Optional)
            </label>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              accept="image/*"
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
