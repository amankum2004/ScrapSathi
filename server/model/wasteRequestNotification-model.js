const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  wasteCollectorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: String,
  seen: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Notification", notificationSchema);
