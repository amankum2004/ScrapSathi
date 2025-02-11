// // import React, { useState, useEffect } from "react";

// // const WasteCollectorDashboard = () => {
// //   const [requests, setRequests] = useState([]);
// //   const [selectedRequest, setSelectedRequest] = useState(null);
// //   const [arrivalTime, setArrivalTime] = useState("");

// //   useEffect(() => {
// //     // Fetch requests from backend (replace with actual API call)
// //     fetch("/api/garbage-requests")
// //       .then((res) => res.json())
// //       .then((data) => setRequests(data))
// //       .catch((err) => console.error("Error fetching requests:", err));
// //   }, []);

// //   const handleAccept = (request) => {
// //     setSelectedRequest(request);
// //   };

// //   const handleUpdateTiming = () => {
// //     if (!arrivalTime) return;

// //     // Send update to backend (replace with actual API call)
// //     fetch(`/api/update-timing/${selectedRequest.id}`, {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ arrivalTime }),
// //     })
// //       .then((res) => res.json())
// //       .then(() => {
// //         alert("Arrival time updated successfully");
// //         setSelectedRequest(null);
// //         setArrivalTime("");
// //       })
// //       .catch((err) => console.error("Error updating time:", err));
// //   };

// //   return (
// //     <div className="p-6 max-w-4xl mx-auto">
// //       <h1 className="text-2xl font-bold mb-4">Garbage Collection Requests</h1>
// //       <div className="space-y-4">
// //         {requests.map((request) => (
// //           <div
// //             key={request.id}
// //             className="border p-4 rounded-lg shadow-md flex justify-between items-center"
// //           >
// //             <div>
// //               <p className="font-semibold">User: {request.userName}</p>
// //               <p>Contact: {request.contact}</p>
// //               <p>Address: {request.address}</p>
// //               <p>Location: {request.location}</p>
// //             </div>
// //             <button
// //               className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500"
// //               onClick={() => handleAccept(request)}
// //             >
// //               Accept Request
// //             </button>
// //           </div>
// //         ))}
// //       </div>

// //       {selectedRequest && (
// //         <div className="mt-6 p-4 border rounded-lg shadow-md bg-gray-100">
// //           <h2 className="text-xl font-semibold">Update Arrival Time</h2>
// //           <p>User: {selectedRequest.userName}</p>
// //           <input
// //             type="time"
// //             className="mt-2 p-2 border rounded-lg w-full"
// //             value={arrivalTime}
// //             onChange={(e) => setArrivalTime(e.target.value)}
// //           />
// //           <button
// //             className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
// //             onClick={handleUpdateTiming}
// //           >
// //             Confirm Timing
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default WasteCollectorDashboard;
// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   CheckCircleIcon,
//   ClockIcon,
//   MapPinIcon,
//   PhoneIcon,
// } from "lucide-react";

// const dummyRequests = [
//   {
//     id: 1,
//     user: "Amit Sharma",
//     address: "123 Green Street, Delhi",
//     contact: "+91 9876543210",
//     location: "28.7041, 77.1025",
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

//   const acceptRequest = (id) => {
//     setRequests((prevRequests) =>
//       prevRequests.map((req) =>
//         req.id === id ? { ...req, status: "Accepted", arrivalTime: "TBD" } : req
//       )
//     );
//   };

//   const updateArrivalTime = (id, time) => {
//     setRequests((prevRequests) =>
//       prevRequests.map((req) =>
//         req.id === id ? { ...req, arrivalTime: time } : req
//       )
//     );
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Waste Collection Requests</h2>
//       <div className="space-y-4">
//         {requests.map((req) => (
//           <Card
//             key={req.id}
//             className="p-4 shadow-md border-l-4 border-green-500"
//           >
//             <CardContent>
//               <h3 className="text-lg font-semibold">{req.user}</h3>
//               <p className="flex items-center gap-2">
//                 <MapPinIcon size={16} /> {req.address}
//               </p>
//               <p className="flex items-center gap-2">
//                 <PhoneIcon size={16} /> {req.contact}
//               </p>
//               <p className="flex items-center gap-2">
//                 <span className="font-semibold">Status:</span> {req.status}
//               </p>
//               {req.status === "Accepted" && (
//                 <p className="flex items-center gap-2">
//                   <ClockIcon size={16} /> Arrival Time: {req.arrivalTime}
//                 </p>
//               )}
//               <div className="mt-3 flex gap-3">
//                 {req.status === "Pending" && (
//                   <Button onClick={() => acceptRequest(req.id)}>
//                     <CheckCircleIcon size={16} /> Accept
//                   </Button>
//                 )}
//                 {req.status === "Accepted" && (
//                   <input
//                     type="time"
//                     className="border p-2 rounded"
//                     onChange={(e) => updateArrivalTime(req.id, e.target.value)}
//                   />
//                 )}
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WasteCollectorDashboard;
