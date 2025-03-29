const PickupRequest = require("../model/pickupRequest-model");
const User = require("../model/user/user-model");
const Notification = require("../model/wasteRequestNotification-model");
// const nodemailer = require("nodemailer");
const {sendConfirmationEmail} = require("../utils/mail");

// Create a new pickup request
exports.createPickupRequest = async (req, res) => {
  try {
    // console.log("Request body:", req.body);
    // const { userId, wasteType, quantity, address, preferredTimeSlot } = req.body;
    const { userId, wasteType, quantity, address, preferredTimeSlot, subcategory } = req.body;
    // const photo = req.file ? req.file.filename : null;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }
    // Convert image to Base64 if uploaded
    let photoBase64 = null;
    if (req.file) {
      photoBase64 = req.file.buffer.toString("base64");
    }

    const pickupRequest = new PickupRequest({
      userId,
      wasteType,
      quantity,
      address,
      preferredTimeSlot,
      subcategory,
      photo: photoBase64,
      // otherWasteType,
    });

    await pickupRequest.save();

    // Get all waste collectors
    const wasteCollectors = await User.find({ userType: "waste-collector" });

    // Send notification to all collectors
    const notifications = wasteCollectors.map(collector => ({
      wasteCollectorId: collector._id,
      message: `New waste pickup request at ${address}`,
    }));
    await Notification.insertMany(notifications);
    res.status(201).json({ message: "Pickup request created and notified collectors." });
  } catch (error) {
    console.log("Error from backend-", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get notifications for a waste collector
exports.getNotifications = async (req, res) => {
  try {
    const { wasteCollectorId } = req.params;
    const notifications = await Notification.find({ wasteCollectorId, seen: false });

    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mark notification as seen
exports.markNotificationSeen = async (req, res) => {
  try {
    const { notificationId } = req.params;
    await Notification.findByIdAndUpdate(notificationId, { seen: true });
    res.json({ message: "Notification marked as seen." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAllWasteRequests = async (req, res) => {
  try {
    const wasteRequests = await PickupRequest.find().populate("userId", "name email phone address");
    res.status(200).json(wasteRequests);
  } catch (error) {
    console.error("Error fetching waste requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Get all pending requests
exports.getPendingRequests = async (req, res) => {
  try {
    const requests = await WasteRequest.find({ status: "pending" }).populate("userId", "name phone");
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: "Error fetching requests", error });
  }
};


// Waste Collector Accepts Request
exports.acceptRequest = async (req, res) => {
  try {
    const { requestId, wasteCollectorId } = req.body;
    if (!requestId || !wasteCollectorId) {
      return res.status(400).json({ message: "Missing requestId or wasteCollectorId" });
    }

    const request = await PickupRequest.findById(requestId).populate("userId");
    if (!request) return res.status(404).json({ message: "Request not found" });

    // Ensure the request is still pending before accepting
    if (request.status !== "pending") {
      return res.status(400).json({ message: "Request is already accepted or completed" });
    }

    request.wasteCollector = wasteCollectorId;
    request.status = "accepted";
    await request.save();

    // Send confirmation email
    const user = await User.findById(request.userId);
    const wasteCollector = await User.findById(wasteCollectorId);

    if (user && wasteCollector) {
      await sendConfirmationEmail(user.email, wasteCollector);
    }

    res.status(200).json({ message: "Request accepted", request });
  } catch (error) {
    console.error("Error in accept Request:", error);
    res.status(500).json({ message: error.message });
  }
};

// Cancel an accepted request
exports.cancelAcceptedRequest = async (req, res) => {
  const { requestId, wasteCollectorId } = req.body;

  if (!requestId || !wasteCollectorId) {
    return res.status(400).json({ message: "Missing request ID or collector ID" });
  }

  try {
    const request = await PickupRequest.findById(requestId);
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    if (request.status !== "accepted" || request.wasteCollector.toString() !== wasteCollectorId) {
      return res.status(400).json({ message: "You can only cancel requests you accepted" });
    }

    request.status = "pending";
    request.wasteCollector = null;
    await request.save();

    res.status(200).json({ message: "Request canceled successfully, available for others", request });
  } catch (error) {
    res.status(500).json({ message: "Error canceling request", error });
  }
};
