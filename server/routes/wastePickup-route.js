const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = require("../middleware/upload");
const { createPickupRequest, 
    getNotifications, 
    markNotificationSeen, 
    getAllWasteRequests, 
    acceptRequest,
    cancelAcceptedRequest} = require("../controller/wastePickup-controller");


// Create pickup request
router.post("/request", upload.single("photo"), createPickupRequest);
router.get("/waste-requests", getAllWasteRequests);
router.post("/accept-request", acceptRequest);
router.post("/cancel-request", cancelAcceptedRequest);



// Get notifications for a waste collector
router.get("/notifications/:wasteCollectorId", getNotifications);

// Mark notification as seen
router.put("/notification/:notificationId", markNotificationSeen);

module.exports = router;
