const mongoose = require("mongoose");

const pickupRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  wasteCollector: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  wasteType: { type: String, required: true },
  quantity: { type: Number, required: true },
  photo: { type: String }, // Base64 image string
  address: { type: String, required: true },
  preferredTimeSlot: { type: String, required: true },
  status: { type: String, enum: ["pending", "accepted", "completed"], default: "pending" },
  subcategory: { type: String },
  createdAt: { type: Date, default: Date.now },
  // otherWasteType: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("PickupRequest", pickupRequestSchema);
