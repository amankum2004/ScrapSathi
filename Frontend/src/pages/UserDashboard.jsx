import { useState } from "react";
import {
  CalendarIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dashboardData, setDashboardData] = useState({
    upcomingCollection: [
      {
        date: "15-12-2-2025",
        time: "10:00 AM - 12:00 PM",
        location: "Sector 23",
        collector: {
          name: "John Doe",
          contact: "+91 123 456 7890",
          vehicle: "Truck",
          photo: "https://www.example.com/john-photo.jpg", // Placeholder photo URL
        },
      },
      {
        date: "2025-02-20",
        time: "2:00 PM - 4:00 PM",
        location: "Sector 15",
        collector: {
          name: "Jane Smith",
          contact: "+91 987 654 3210",
          vehicle: "Van",
          photo: "https://www.example.com/jane-photo.jpg", // Placeholder photo URL
        },
      },
    ],
    wasteHistory: [
      {
        date: "2025-02-05",
        type: "Plastic",
        weight: "2 kg",
        moneyEarned: "₹50",
        disposalMethod: "Recycled",
      },
      {
        date: "2025-02-10",
        type: "Paper",
        weight: "1.5 kg",
        moneyEarned: "₹30",
        disposalMethod: "Recycled",
      },
      {
        date: "2025-02-12",
        type: "Glass",
        weight: "3 kg",
        moneyEarned: "₹60",
        disposalMethod: "Recycled",
      },
      {
        date: "2025-02-13",
        type: "Plastic",
        weight: "1 kg",
        moneyEarned: "₹20",
        disposalMethod: "Recycled",
      },
      {
        date: "2025-02-14",
        type: "Metal",
        weight: "1.2 kg",
        moneyEarned: "₹25",
        disposalMethod: "Recycled",
      },
    ],
    environmentalImpact: {
      totalWasteRecycled: "5 kg",
      carbonOffset: "12 kg CO2",
      treesSaved: "3 Trees",
      moneyEarned: "₹80",
    },
  });

  // Pie Chart Data for User Contribution
  const chartData = {
    labels: ["Waste Recycled", "Money Earned", "Carbon Offset", "Trees Saved"],
    datasets: [
      {
        data: [
          parseFloat(dashboardData.environmentalImpact.totalWasteRecycled),
          parseFloat(
            dashboardData.environmentalImpact.moneyEarned.replace("₹", "")
          ),
          parseFloat(dashboardData.environmentalImpact.carbonOffset),
          parseFloat(dashboardData.environmentalImpact.treesSaved),
        ],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#9C27B0"],
      },
    ],
  };

  // Filtered Waste Disposal History
  const filteredHistory = dashboardData.wasteHistory.filter((history) =>
    history.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-500 min-h-screen p-8 mt-20">
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
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <CalendarIcon className="w-6 h-6 mr-2 text-green-500" />
            Upcoming Collection Schedule
          </h2>
          <div className="space-y-6">
            {dashboardData.upcomingCollection.map((schedule, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-md">
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="font-medium">{schedule.date}</p>
                    <p className="text-sm">{schedule.time}</p>
                    <p className="text-sm">{schedule.location}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={schedule.collector.photo}
                      alt="Collector"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <p className="font-medium">Contact Details</p>
                  <p className="text-sm">Name: {schedule.collector.name}</p>
                  <p className="text-sm">
                    Contact: {schedule.collector.contact}
                  </p>
                  <p className="text-sm">
                    Vehicle: {schedule.collector.vehicle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Contribution Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <GlobeAltIcon className="w-6 h-6 mr-2 text-green-500" />
            Your Environmental Contribution
          </h2>
          <Pie data={chartData} className="mb-4" />
          <div className="flex justify-around mt-4">
            <div>
              <p className="font-medium">Waste Recycled</p>
              <p>{dashboardData.environmentalImpact.totalWasteRecycled}</p>
            </div>
            <div>
              <p className="font-medium">Money Earned</p>
              <p>{dashboardData.environmentalImpact.moneyEarned}</p>
            </div>
            <div>
              <p className="font-medium">Carbon Offset</p>
              <p>{dashboardData.environmentalImpact.carbonOffset}</p>
            </div>
            <div>
              <p className="font-medium">Trees Saved</p>
              <p>{dashboardData.environmentalImpact.treesSaved}</p>
            </div>
          </div>
        </div>

        {/* Waste Disposal History */}
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 lg:col-span-3">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <DocumentTextIcon className="w-6 h-6 mr-2 text-green-500" />
            Waste Disposal History
          </h2>

          {/* Search Bar for History */}
          <div className="mb-6 flex items-center border p-3 rounded-lg">
            <input
              type="text"
              placeholder="Search by Waste Type"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full focus:outline-none"
            />
          </div>

          {/* Waste History List */}
          <ul className="space-y-4 ">
            {filteredHistory.length > 0 ? (
              filteredHistory.map((disposal, index) => (
                <li
                  key={index}
                  className="grid grid-cols-5 gap-4 border-b py-2"
                >
                  <div className="font-medium">{disposal.date}</div>
                  <div className="text-sm">Type: {disposal.type}</div>
                  <div className="text-sm">Weight: {disposal.weight}</div>
                  <div className="text-sm">
                    Money Earned: {disposal.moneyEarned}
                  </div>
                  <div className="text-sm">
                    Disposal Method: {disposal.disposalMethod}
                  </div>
                </li>
              ))
            ) : (
              <p>No matching records found.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
