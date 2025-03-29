// import React, { useState } from "react";
// import {
//   CheckCircleIcon,
//   ClockIcon,
//   MapPinIcon,
//   PhoneIcon,
//   XCircleIcon,
// } from "lucide-react";

// // Dummy data for requests
// const dummyRequests = [
//   {
//     id: 1,
//     user: "Amit Sharma",
//     address: "123 Green Street, Delhi",
//     contact: "+91 9876543210",
//     location: "28.7041, 77.1025", // Coordinates for the map
//     status: "Pending",
//   },
//   {
//     id: 2,
//     user: "Priya Verma",
//     address: "456 Blue Road, Mumbai",
//     contact: "+91 8765432109",
//     location: "19.0760, 72.8777",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     user: "Rahul Gupta",
//     address: "789 Red Avenue, Bangalore",
//     contact: "+91 9988776655",
//     location: "12.9716, 77.5946",
//     status: "Accepted",
//     arrivalTime: "10:30 AM",
//   },
// ];

// const WasteCollectorDashboard = () => {
//   const [requests, setRequests] = useState(dummyRequests);
//   const [arrivalTimeInput, setArrivalTimeInput] = useState("");
//   const [showTimePicker, setShowTimePicker] = useState(null); // Track which request is being edited for time

//   const acceptRequest = (id) => {
//     setRequests((prevRequests) =>
//       prevRequests.map((req) =>
//         req.id === id ? { ...req, status: "Accepted" } : req
//       )
//     );
//     setShowTimePicker(id); // Show the time picker for this request
//   };

//   const handleArrivalTimeChange = (id, time) => {
//     setArrivalTimeInput(time);
//   };

//   const confirmArrivalTime = (id) => {
//     setRequests((prevRequests) =>
//       prevRequests.map((req) =>
//         req.id === id ? { ...req, arrivalTime: arrivalTimeInput } : req
//       )
//     );
//     setShowTimePicker(null); // Hide time picker after confirming
//   };

//   const cancelAcceptedRequest = (id) => {
//     setRequests((prevRequests) =>
//       prevRequests.map((req) =>
//         req.id === id ? { ...req, status: "Pending", arrivalTime: null } : req
//       )
//     );
//   };

//   const declineRequest = (id) => {
//     setRequests((prevRequests) => prevRequests.filter((req) => req.id !== id));
//   };

//   const viewLocationOnMap = (location) => {
//     const [latitude, longitude] = location.split(", ");
//     const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
//     window.open(url, "_blank");
//   };

//   const connectWithUser = (contact) => {
//     window.location.href = `tel:${contact}`;
//   };

//   // Sort the requests to show accepted ones first
//   const sortedRequests = requests.sort((a, b) => {
//     if (a.status === "Accepted" && b.status !== "Accepted") return -1;
//     if (a.status !== "Accepted" && b.status === "Accepted") return 1;
//     return 0;
//   });

//   return (
//     <div className="max-w-4xl mx-auto p-6 mt-20">
//       <h2 className="text-2xl font-bold mb-4">Waste Collection Requests</h2>
//       <div className="space-y-4">
//         {sortedRequests.map((req) => (
//           <div
//             key={req.id}
//             className={`border p-4 rounded-lg shadow-md ${
//               req.status === "Accepted" ? "bg-gray-200" : "bg-white"
//             }`}
//           >
//             <h3 className="text-lg font-semibold">{req.user}</h3>
//             <p className="flex items-center gap-2">
//               <MapPinIcon size={16} /> {req.address}
//             </p>
//             <p className="flex items-center gap-2">
//               <PhoneIcon size={16} /> {req.contact}
//             </p>
//             <p className="flex items-center gap-2">
//               <span className="font-semibold">Status:</span> {req.status}
//             </p>
//             {req.status === "Accepted" && req.arrivalTime && (
//               <p className="flex items-center gap-2">
//                 <ClockIcon size={16} /> Arrival Time: {req.arrivalTime}
//               </p>
//             )}

//             {/* Time Picker for Accepted Requests */}
//             {req.status === "Accepted" && showTimePicker === req.id && (
//               <div className="flex items-center gap-2 mt-3">
//                 <input
//                   type="time"
//                   className="border p-2 rounded"
//                   value={arrivalTimeInput}
//                   onChange={(e) =>
//                     handleArrivalTimeChange(req.id, e.target.value)
//                   }
//                 />
//                 <button
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
//                   onClick={() => confirmArrivalTime(req.id)}
//                 >
//                   OK
//                 </button>
//               </div>
//             )}

//             <div className="mt-3 flex gap-3">
//               {req.status === "Pending" && (
//                 <button
//                   className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500"
//                   onClick={() => acceptRequest(req.id)}
//                 >
//                   <CheckCircleIcon size={16} /> Accept
//                 </button>
//               )}

//               {req.status === "Accepted" && (
//                 <button
//                   className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
//                   onClick={() => cancelAcceptedRequest(req.id)}
//                 >
//                   <XCircleIcon size={16} /> Cancel Accepted Request
//                 </button>
//               )}
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400"
//                 onClick={() => connectWithUser(req.contact)}
//               >
//                 <PhoneIcon size={16} /> Connect with User
//               </button>
//               <button
//                 className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400"
//                 onClick={() => viewLocationOnMap(req.location)}
//               >
//                 <MapPinIcon size={16} /> View Location on Map
//               </button>
//               {req.status === "Pending" && (
//                 <button
//                   className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
//                   onClick={() => declineRequest(req.id)}
//                 >
//                   <XCircleIcon size={16} /> Decline
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WasteCollectorDashboard;



import { useState, useEffect } from "react";
import { useLogin } from "../components/LoginContext";
import {
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  XCircleIcon,
} from "lucide-react";
import { api } from "../utils/api";

const CollectorDashboard = () => {
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
      setRequests(response.data);
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
      // alert("Request cancelled");
      fetchRequests();
    } catch (error) {
      console.error("Error canceling request:", error);
    }
  };

  // useEffect(() => {
  //   // console.log("Logged in user:", user);
  //   api.get("/pickup/waste-requests")
  //     .then((res) => setRequests(res.data))
  //     .catch((err) => console.error(err));
  // }, [user]); // Make sure useEffect runs when `user` updates

  // const handleAccept = async (requestId) => {
  //   if (!user || !user.userId) {
  //     alert("Error: Collector ID is missing");
  //     return;
  //   }
  //   try {
  //     console.log("Sending request:", { requestId, wasteCollectorId: user.userId }); // Debugging
  //     await api.post("/pickup/accept-request", { requestId, wasteCollectorId: user.userId });
  //     alert("Request Accepted");
  //     setRequests((prev) =>
  //       prev.map((req) => (req._id === requestId ? { ...req, status: "accepted" } : req))
  //     );
  //   } catch (error) {
  //     console.error("Error accepting request:", error.response?.data || error.message);
  //     alert(error.response?.data?.message || "Failed to accept request");
  //   }
  // };

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
            className={`border p-4 rounded-lg shadow-md ${req.status === "Accepted" ? "bg-gray-200" : "bg-white"
              }`}
          >
            <h3 className="text-lg font-semibold">{req.userId.name}</h3>
            <p className="flex items-center gap-2">
              <MapPinIcon size={16} /> {req.address}
            </p>
            <p className="flex items-center gap-2">
              <PhoneIcon size={16} /> {req.userId.phone}
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
                >
                  <CheckCircleIcon size={16} /> Accept
                </button>
              )}

              {req.status === "accepted" && (
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
                  onClick={() => cancelAcceptedRequest(req._id)}
                >
                  <XCircleIcon size={16} /> Cancel Accepted Request
                </button>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectorDashboard;







