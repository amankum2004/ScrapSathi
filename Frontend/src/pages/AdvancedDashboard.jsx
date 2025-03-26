import React from "react";
import { FiBell, FiMenu, FiSearch, FiUser, FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function AdvancedDashboard({ userRole = "recycle-companies"}) {
  // Example dummy data; this could be fetched from an API.
  const quickStats = [
    { label: "Scrap Recycled", value: "120 kg", icon: "♻️" },
    { label: "Rewards Earned", value: "₹500", icon: "🏆" },
    { label: "Scheduled Pickups", value: "8", icon: "📅" },
    { label: "Completed Pickups", value: "25", icon: "✅" },
  ];

  const recentActivities = [
    { id: 1, activity: "Recycled 5 kg of plastic", date: "2025-03-20" },
    { id: 2, activity: "Scheduled a pickup", date: "2025-03-19" },
    { id: 3, activity: "Earned ₹50 reward", date: "2025-03-18" },
  ];

  // Role-based sidebar items
  const sidebarItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/profile" },
    // Add role-specific items
    ...(userRole === "waste-collector"
      ? [{ label: "Pickups", path: "/dashboard/pickups" }]
      : []),
    ...(userRole === "big-organization"
      ? [
          { label: "Reports", path: "/dashboard/reports" },
          { label: "Vendors", path: "/dashboard/vendors" },
        ]
      : []),
    ...(userRole === "recycle-companies"
      ? [
          { label: "Inventory", path: "/dashboard/inventory" },
          { label: "Orders", path: "/dashboard/orders" },
        ]
      : []),
    { label: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between bg-blue-600 text-white px-6 py-4 shadow-md fixed w-full z-20">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden">
            <FiMenu size={24} />
          </button>
          <h1 className="text-2xl font-bold">Scrapsaathi Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-md text-black"
            />
            <FiSearch
              className="absolute left-3 top-2.5 text-gray-500"
              size={18}
            />
          </div>
          <button className="relative">
            <FiBell size={24} />
            <span className="absolute top-0 right-0 bg-red-500 rounded-full text-xs w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          <button>
            <FiUser size={24} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 pt-20">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-6 hidden lg:block">
          <h2 className="text-xl font-bold mb-8">Menu</h2>
          <nav>
            <ul className="space-y-4">
              {sidebarItems.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="hover:text-gray-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          {/* Quick Stats Cards */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white p-6 rounded-lg shadow flex items-center space-x-4"
                >
                  <div className="text-3xl">{stat.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-xl font-bold">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Analytics Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <div className="bg-white p-6 rounded-lg shadow h-64 flex items-center justify-center">
              {/* Replace this div with a real chart component */}
              <p className="text-gray-500">Chart Placeholder</p>
            </div>
          </section>

          {/* Recent Activities & Other Widgets */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activities */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
              <ul className="space-y-3">
                {recentActivities.map((act) => (
                  <li
                    key={act.id}
                    className="flex justify-between border-b pb-2"
                  >
                    <span>{act.activity}</span>
                    <span className="text-sm text-gray-500">{act.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Widget (e.g., Orders/Pickups) */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">
                {userRole === "recycle-companies"
                  ? "Latest Orders"
                  : userRole === "waste-collector"
                  ? "Pickup Requests"
                  : "Notifications"}
              </h3>
              {/* Example: A table or list */}
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2">Item</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Scrap Metal</td>
                    <td className="py-2">Pending</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Plastic Waste</td>
                    <td className="py-2">Completed</td>
                  </tr>
                  <tr>
                    <td className="py-2">Electronic Waste</td>
                    <td className="py-2">In Process</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
