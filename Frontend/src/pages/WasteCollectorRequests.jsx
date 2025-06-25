import { useState, useEffect } from "react";
import { useLogin } from "../components/LoginContext";
import {
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  XCircleIcon,
  TruckIcon
} from "lucide-react";
import { api } from "../utils/api";

const WasteCollectorRequests = () => {
  const { user } = useLogin();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const response = await api.get("/pickup/waste-requests");
      // Filter out completed requests right after fetching
      const filteredRequests = response.data.filter(req => req.status !== "completed");
      setRequests(filteredRequests);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
    setLoading(false);
  };

  const handleAccept = async (requestId) => {
    try {
      await api.post("/pickup/accept-request", { requestId, wasteCollectorId: user.userId });
      alert("Request Accepted");
      fetchRequests();
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  const cancelAcceptedRequest = async (requestId) => {
    try {
      await api.post("/pickup/cancel-request", { requestId, wasteCollectorId: user.userId });
      fetchRequests();
    } catch (error) {
      console.error("Error canceling request:", error);
    }
  };
  
  const markAsCompleted = async (requestId) => {
    try {
      await api.post("/pickup/complete-request", {requestId, wasteCollectorId: user.userId});
      setRequests(prev => prev.filter(req => req._id !== requestId));
    } catch (error) {
      console.error("Error completing request:", error);
    }
  };
  
  // Sort the requests to show accepted ones first
  const sortedRequests = requests.sort((a, b) => {
    if (a.status === "accepted" && b.status !== "accepted") return -1;
    if (a.status !== "accepted" && b.status === "accepted") return 1;
    return 0;
  });


  const viewLocationOnMap = (location) => {
    const [latitude, longitude] = location.split(", ");
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  const connectWithUser = (contact) => {
    window.location.href = `tel:${contact}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4">Waste Collection Requests</h2>
      <div className="space-y-4">
        {sortedRequests.map((req) => (
          <div
            key={req._id}
            className={`border p-4 rounded-lg shadow-md ${
              req.status === "accepted" ? "bg-gray-100" : 
              req.status === "completed" ? "bg-green-50" : "bg-white"
            }`}
          >
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="flex items-center gap-2">
              <MapPinIcon size={16} /> {req.address}
            </p>
            <p className="flex items-center gap-2">
              <PhoneIcon size={16} /> {user.phone}
            </p>
            <p><strong>Waste Type:</strong> {req.wasteType}</p>
            <p><strong>Quantity:</strong> {req.quantity} kg</p>
            <p><strong>Preferred Time:</strong> {req.preferredTimeSlot}</p>
            {req.photo && (
              <img src={`data:image/jpeg;base64,${req.photo}`} alt="Waste" className="mt-2 w-32 h-32 object-cover rounded" />
            )}
            <p className="flex items-center gap-2">
              <span className="font-semibold">Status:</span> {req.status}
            </p>
            {req.status === "Accepted" && req.arrivalTime && (
              <p className="flex items-center gap-2">
                <ClockIcon size={16} /> Arrival Time: {req.arrivalTime}
              </p>
            )}

            <div className="mt-3 flex gap-3">
              {req.status === "pending" && (
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500"
                  onClick={() => handleAccept(req._id)}
                  disabled={req.status === "accepted"}
                >
                  <CheckCircleIcon size={16} /> Accept
                </button>
              )}

              {req.status === "accepted" && (
                <>
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                    onClick={() => markAsCompleted(req._id)}
                  >
                    <TruckIcon size={16} /> Mark as Completed
                  </button>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
                    onClick={() => cancelAcceptedRequest(req._id)}
                  >
                    <XCircleIcon size={16} /> Cancel
                  </button>
                </>
              )}
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400"
                onClick={() => connectWithUser(req.phone)}
              >
                <PhoneIcon size={16} /> Connect with User
              </button>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400"
                onClick={() => viewLocationOnMap(req.address)}
              >
                <MapPinIcon size={16} /> View Location on Map
              </button>

            </div>
            {req.status === "completed" && (
              <div className="mt-2 text-green-600 font-semibold flex items-center gap-1">
                <CheckCircleIcon size={16} /> Completed
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteCollectorRequests;







