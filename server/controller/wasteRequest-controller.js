const WasteRequest = require("../model/wasteRequest-model");

exports.createWasteRequest = async (req, res) => {
  try {
    const newWaste = new WasteRequest(req.body);
    await newWaste.save();
    res.json({ message: "Waste request created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserWaste = async (req, res) => {
  try {
    const waste = await WasteRequest.find({ userId: req.params.userId });
    res.json(waste);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.acceptWasteRequest = async (req, res) => {
    try {
      const { collectorId } = req.body;
      const wasteRequest = await WasteRequest.findById(req.params.wasteId);
      if (!wasteRequest || wasteRequest.status !== "pending") {
        return res.status(400).json({ message: "Waste request not available" });
      }
      wasteRequest.collectorId = collectorId;
      wasteRequest.status = "accepted";
      await wasteRequest.save();
      res.json({ message: "Waste request accepted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.getActiveBookings = async (req, res) => {
    try {
      const activeBookings = await WasteRequest.find({ collectorId: req.params.collectorId, status: "accepted" });
      res.json(activeBookings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.getCollectionHistory = async (req, res) => {
    try {
      const history = await WasteRequest.find({ collectorId: req.params.collectorId, status: "collected" });
      res.json(history);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

