// const mongoose=require('mongoose');

// const WasteItemSchema = new mongoose.Schema({
//   category: {
//     type: String,
//     enum: ["E-waste", "Metal waste", "Plastic waste", "Cardboard waste", "Glass waste", "Others"],
//     required: true
//   },
//   subcategory: String, // Example: Batteries, Wires, Copper, Iron, etc.
//   weight: Number,
//   imageUrl: String
// });

// const WasteRequestSchema = new mongoose.Schema({
//   userId: mongoose.Schema.Types.ObjectId,
//   collectorId: mongoose.Schema.Types.ObjectId,
//   wasteItems: [WasteItemSchema], // Array of different waste types
//   location: String,
//   status: {
//     type: String,
//     enum: ["pending", "accepted", "collected"],
//     default: "pending"
//   },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("WasteRequest", WasteRequestSchema);



