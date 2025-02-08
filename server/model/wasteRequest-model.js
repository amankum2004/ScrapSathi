const mongoose=require('mongoose');

const WasteRequestSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    collectorId: mongoose.Schema.Types.ObjectId,
    wasteType: String,
    weight: Number,
    location: String,
    imageUrl: String,
    status: { type: String, enum: ["pending", "collected"], default: "pending" },
    createdAt: { type: Date, default: Date.now },
  });


  module.exports = mongoose.model("WasteRequest", WasteRequestSchema);