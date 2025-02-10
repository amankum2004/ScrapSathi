import { useState } from "react";
import {
  CalendarIcon,
  DocumentTextIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    upcomingCollection: [
      {
        date: "2025-02-15",
        time: "10:00 AM - 12:00 PM",
        location: "Sector 23",
      },
      { date: "2025-02-20", time: "2:00 PM - 4:00 PM", location: "Sector 15" },
    ],
    wasteHistory: [
      {
        date: "2025-02-05",
        type: "Plastic",
        weight: "2 kg",
        disposalMethod: "Recycled",
      },
      {
        date: "2025-02-10",
        type: "Paper",
        weight: "1.5 kg",
        disposalMethod: "Recycled",
      },
    ],
    environmentalImpact: {
      totalWasteRecycled: "5 kg",
      carbonOffset: "12 kg CO2",
      treesSaved: "3 Trees",
    },
  });

  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-500 min-h-screen p-8">
      {/* Dashboard Header */}
      <div className="text-center text-white mb-8">
        <h1 className="text-4xl font-bold">Welcome to Your Dashboard</h1>
        <p className="text-lg mt-2">
          Here’s a snapshot of your eco-friendly journey.
        </p>
      </div>

      {/* Dashboard Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Collection Schedule */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <CalendarIcon className="w-6 h-6 mr-2 text-green-500" />
            Upcoming Collection Schedule
          </h2>
          <ul className="space-y-4">
            {dashboardData.upcomingCollection.map((schedule, index) => (
              <li key={index} className="border-b py-2">
                <p className="font-medium">{schedule.date}</p>
                <p className="text-sm">{schedule.time}</p>
                <p className="text-sm">{schedule.location}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Waste Disposal History */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <DocumentTextIcon className="w-6 h-6 mr-2 text-green-500" />
            Waste Disposal History
          </h2>
          <ul className="space-y-4">
            {dashboardData.wasteHistory.map((disposal, index) => (
              <li key={index} className="border-b py-2">
                <p className="font-medium">{disposal.date}</p>
                <p className="text-sm">Type: {disposal.type}</p>
                <p className="text-sm">Weight: {disposal.weight}</p>
                <p className="text-sm">
                  Disposal Method: {disposal.disposalMethod}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Environmental Impact Tracker */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <GlobeAltIcon className="w-6 h-6 mr-2 text-green-500" />
            Environmental Impact Tracker
          </h2>
          <div>
            <p className="font-medium">
              Total Waste Recycled:{" "}
              {dashboardData.environmentalImpact.totalWasteRecycled}
            </p>
            <p className="font-medium">
              Carbon Offset: {dashboardData.environmentalImpact.carbonOffset}
            </p>
            <p className="font-medium">
              Trees Saved: {dashboardData.environmentalImpact.treesSaved}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
