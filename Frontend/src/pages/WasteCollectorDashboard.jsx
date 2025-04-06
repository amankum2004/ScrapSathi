import { useState } from "react";
import {
  CalendarIcon,
  MapPinIcon,
  TruckIcon,
  ScaleIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CollectorDashboard() {
  const [view, setView] = useState("dashboard");
  const [dateFilter, setDateFilter] = useState("today");
  const [collectionStatus, setCollectionStatus] = useState("upcoming");

  // Collector profile data (not displayed)
  const collectorData = {
    name: "Rajesh Kumar",
    id: "WC-2023-5678",
    vehicle: "Truck MH-43 AB 5678",
    contactNumber: "+91 9876543210",
    areasCovered: ["Sector 15", "Sector 23", "Sector 30"],
    rating: 4.8,
    totalCollections: 1243,
    photo: "https://www.example.com/rajesh-photo.jpg",
  };

  // Collection schedule data
  const [collectionSchedule] = useState({
    upcoming: [
      {
        id: "SCH-001",
        date: "2025-04-07",
        time: "09:00-11:00",
        location: "Sector 23",
        pickupPoints: 8,
        estimatedWeight: "35 kg",
        status: "scheduled",
      },
      {
        id: "SCH-005",
        date: "2025-04-08",
        time: "08:00-10:00",
        location: "Sector 30",
        pickupPoints: 5,
        estimatedWeight: "20 kg",
        status: "scheduled",
      },
    ],
    completed: [
      {
        id: "SCH-002",
        date: "2025-04-05",
        time: "10:00-12:00",
        location: "Sector 30",
        pickupPoints: 7,
        totalWeight: "32 kg",
        earnings: "₹650",
      },
      {
        id: "SCH-003",
        date: "2025-04-04",
        time: "09:00-11:00",
        location: "Sector 23",
        pickupPoints: 5,
        totalWeight: "28 kg",
        earnings: "₹580",
      },
      {
        id: "SCH-004",
        date: "2025-04-03",
        time: "14:00-16:00",
        location: "Sector 15",
        pickupPoints: 6,
        totalWeight: "30 kg",
        earnings: "₹620",
      },
    ],
  });

  // Performance metrics
  const performanceData = {
    today: {
      collections: 2,
      waste: "60 kg",
      earnings: "₹1,230",
      customers: 13,
      areas: 2,
    },
    week: {
      collections: 12,
      waste: "350 kg",
      earnings: "₹7,850",
      customers: 65,
      areas: 3,
    },
    month: {
      collections: 48,
      waste: "1,450 kg",
      earnings: "₹32,400",
      customers: 245,
      areas: 3,
    },
  };

  // Chart data (dummy)
  const collectionChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Waste Collected (kg)",
        data: [35, 42, 38, 28, 60, 55, 32],
        backgroundColor: "#4CAF50",
      },
      {
        label: "Earnings (₹10)",
        data: [75, 86, 72, 58, 123, 105, 65],
        backgroundColor: "#2196F3",
      },
    ],
  };

  // Navigation component
  const Navigation = () => (
    <div className="bg-white shadow-md p-4 mb-6 rounded-lg flex justify-center space-x-4">
      {["dashboard", "collections", "performance"].map((tab) => (
        <button
          key={tab}
          onClick={() => setView(tab)}
          className={`px-4 py-2 rounded-lg ${
            view === tab
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-500 min-h-screen p-8 mt-20">
      {/* Header */}
      <div className="text-center text-white mb-8">
        <h1 className="text-4xl font-bold">Welcome to your Collector Dashboard</h1>
        <p className="text-lg mt-2">
          Manage collections and monitor performance
        </p>
      </div>

      <Navigation />

      {/* Dashboard View */}
      {view === "dashboard" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Today's Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-3">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <TruckIcon className="w-6 h-6 mr-2 text-green-500" /> Today's
              Summary
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <TruckIcon className="w-8 h-8 mx-auto text-green-500" />
                <p className="mt-2">Collections</p>
                <p className="text-2xl font-bold">
                  {performanceData.today.collections}
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <ScaleIcon className="w-8 h-8 mx-auto text-blue-500" />
                <p className="mt-2">Waste Collected</p>
                <p className="text-2xl font-bold">
                  {performanceData.today.waste}
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <CurrencyDollarIcon className="w-8 h-8 mx-auto text-purple-500" />
                <p className="mt-2">Earnings</p>
                <p className="text-2xl font-bold">
                  {performanceData.today.earnings}
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <UserGroupIcon className="w-8 h-8 mx-auto text-orange-500" />
                <p className="mt-2">Customers</p>
                <p className="text-2xl font-bold">
                  {performanceData.today.customers}
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <MapPinIcon className="w-8 h-8 mx-auto text-red-500" />
                <p className="mt-2">Areas Covered</p>
                <p className="text-2xl font-bold">
                  {performanceData.today.areas}
                </p>
              </div>
            </div>
          </div>

          {/* Upcoming Collections */}
          <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <CalendarIcon className="w-6 h-6 mr-2 text-green-500" /> Upcoming
              Collections
            </h2>
            <div className="space-y-4">
              {collectionSchedule.upcoming.map((sch) => (
                <div key={sch.id} className="border p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="font-medium">{sch.location}</h3>
                      <p className="text-sm">
                        {sch.date} • {sch.time}
                      </p>
                    </div>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                      Start
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm mt-4">
                    <div>
                      <p className="text-gray-500">Pickup Points</p>
                      <p className="font-medium">{sch.pickupPoints}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Est. Weight</p>
                      <p className="font-medium">{sch.estimatedWeight}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Status</p>
                      <p className="font-medium capitalize">{sch.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Performance Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <ChartBarIcon className="w-6 h-6 mr-2 text-green-500" /> Weekly
              Performance
            </h2>
            <Bar
              data={collectionChartData}
              options={{
                responsive: true,
                plugins: { legend: { position: "top" } },
              }}
            />
          </div>
        </div>
      )}

      {/* Collections View */}
      {view === "collections" && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">All Collections</h2>
          <div className="flex space-x-2 mb-6">
            <button
              onClick={() => setCollectionStatus("upcoming")}
              className={`px-4 py-2 rounded-lg ${
                collectionStatus === "upcoming"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setCollectionStatus("completed")}
              className={`px-4 py-2 rounded-lg ${
                collectionStatus === "completed"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              Completed
            </button>
          </div>
          {collectionStatus === "upcoming" ? (
            <div className="space-y-4">
              {collectionSchedule.upcoming.map((sch) => (
                <div key={sch.id} className="border p-4 rounded-lg shadow-md">
                  <h3 className="font-medium">
                    {sch.id} - {sch.location}
                  </h3>
                  <p className="text-sm">
                    {sch.date} • {sch.time}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {collectionSchedule.completed.map((sch) => (
                <div key={sch.id} className="border p-4 rounded-lg shadow-md">
                  <h3 className="font-medium">
                    {sch.id} - {sch.location}
                  </h3>
                  <p className="text-sm">
                    {sch.date} • {sch.time}
                  </p>
                  <p className="text-sm">
                    Weight: {sch.totalWeight} • Earnings: {sch.earnings}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Performance View */}
      {view === "performance" && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Performance Over Time</h2>
          <div className="flex space-x-2 mb-6">
            {["today", "week", "month"].map((period) => (
              <button
                key={period}
                onClick={() => setDateFilter(period)}
                className={`px-4 py-2 rounded-lg ${
                  dateFilter === period
                    ? "bg-green-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <TruckIcon className="w-8 h-8 mx-auto text-green-500" />
              <p className="mt-2">Collections</p>
              <p className="text-2xl font-bold">
                {performanceData[dateFilter].collections}
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <ScaleIcon className="w-8 h-8 mx-auto text-blue-500" />
              <p className="mt-2">Waste</p>
              <p className="text-2xl font-bold">
                {performanceData[dateFilter].waste}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <CurrencyDollarIcon className="w-8 h-8 mx-auto text-purple-500" />
              <p className="mt-2">Earnings</p>
              <p className="text-2xl font-bold">
                {performanceData[dateFilter].earnings}
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <UserGroupIcon className="w-8 h-8 mx-auto text-orange-500" />
              <p className="mt-2">Customers</p>
              <p className="text-2xl font-bold">
                {performanceData[dateFilter].customers}
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <MapPinIcon className="w-8 h-8 mx-auto text-red-500" />
              <p className="mt-2">Areas Covered</p>
              <p className="text-2xl font-bold">
                {performanceData[dateFilter].areas}
              </p>
            </div>
          </div>
          <div>
            <Bar
              data={collectionChartData}
              options={{
                responsive: true,
                plugins: { legend: { position: "top" } },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
