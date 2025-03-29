// const WasteRequest = require("../model/wasteRequest-model");

// exports.createWasteRequest = async (req, res) => {
//   try {
//     const { userId, wasteItems, location } = req.body;
//     if (!wasteItems || wasteItems.length === 0) {
//       return res.status(400).json({ message: "At least one waste item is required." });
//     }

//     const newWasteRequest = new WasteRequest({
//       userId,
//       wasteItems,
//       location,
//       status: "pending"
//     });

//     await newWasteRequest.save();
//     res.status(201).json({ message: "Waste request created successfully.", wasteRequest: newWasteRequest });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.getUserWasteRequests = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const requests = await WasteRequest.find({ userId });
//     res.json(requests);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.getAllWasteRequests = async (req, res) => {
//   try {
//     const requests = await WasteRequest.find();
//     res.json(requests);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.acceptWasteRequest = async (req, res) => {
//     try {
//       const { collectorId } = req.body;
//       const wasteRequest = await WasteRequest.findById(req.params.wasteId);
//       if (!wasteRequest || wasteRequest.status !== "pending") {
//         return res.status(400).json({ message: "Waste request not available" });
//       }
//       wasteRequest.collectorId = collectorId;
//       wasteRequest.status = "accepted";
//       await wasteRequest.save();
//       res.json({ message: "Waste request accepted" });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
// };

// exports.getActiveBookings = async (req, res) => {
//     try {
//       const activeBookings = await WasteRequest.find({ collectorId: req.params.collectorId, status: "accepted" });
//       res.json(activeBookings);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
// };

// exports.getCollectionHistory = async (req, res) => {
//     try {
//       const history = await WasteRequest.find({ collectorId: req.params.collectorId, status: "collected" });
//       res.json(history);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
// };

