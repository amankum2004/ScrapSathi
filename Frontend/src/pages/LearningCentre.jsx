import { useState } from "react";
import {
  Leaf,
  Recycle,
  BookOpen,
  Smartphone,
  Clock,
  DollarSign,
  BarChart3,
} from "lucide-react";

export default function LearningCenter() {
  const [activeTab, setActiveTab] = useState("learn");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500 flex flex-col items-center justify-start p-20 space-y-6">
      <div className="w-full max-w-3xl bg-white/95 rounded-lg shadow-xl backdrop-blur p-6">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Recycle className="w-8 h-8 text-emerald-500" />
          <h2 className="text-3xl font-bold text-gray-800">
            ScrapSaathi Learning Hub
          </h2>
        </div>

        {/* Custom Tabs */}
        <div className="w-full">
          <div className="grid grid-cols-4 gap-4 bg-gray-100 p-2 rounded-lg">
            {[
              { id: "learn", icon: BookOpen, label: "Learn" },
              { id: "app-guide", icon: Smartphone, label: "App Guide" },
              { id: "tips", icon: Leaf, label: "Tips" },
              { id: "impact", icon: Recycle, label: "Impact" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center justify-center space-x-2 p-2 rounded-md transition-colors
                  ${
                    activeTab === tab.id
                      ? "bg-white shadow-sm text-emerald-600"
                      : "hover:bg-white/50 text-gray-600"
                  }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {/* Learn Tab */}
            {activeTab === "learn" && (
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6">
                {/* Learn content */}
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Understanding Waste Management
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Waste management is the backbone of environmental
                      sustainability. Through proper collection, processing, and
                      disposal of waste, we can significantly reduce our
                      environmental impact and create a cleaner future for
                      generations to come.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Recycling", "Composting", "Reduction", "Reuse"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-semibold mb-2">Quick Facts</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span className="text-sm">
                          Recycling saves energy and resources
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span className="text-sm">
                          Composting reduces methane emissions
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span className="text-sm">
                          Proper sorting increases recycling efficiency
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* App Guide Tab */}
            {activeTab === "app-guide" && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Getting Started with ScrapSaathi
                </h3>

                <div className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        icon: Clock,
                        title: "Schedule Pickups",
                        description:
                          "Set convenient pickup times for your recyclables. Get notifications and track your pickup status in real-time.",
                        color: "blue",
                      },
                      {
                        icon: DollarSign,
                        title: "Earn from Waste",
                        description:
                          "Convert your recyclable waste into money. Get competitive rates for paper, plastic, metal, and e-waste.",
                        color: "green",
                      },
                      {
                        icon: BarChart3,
                        title: "Track Impact",
                        description:
                          "Monitor your environmental contribution through detailed analytics and impact reports.",
                        color: "purple",
                      },
                      {
                        icon: Leaf,
                        title: "Learn & Improve",
                        description:
                          "Access educational resources and tips to improve your waste management practices.",
                        color: "emerald",
                      },
                    ].map((feature) => (
                      <div
                        key={feature.title}
                        className="bg-white rounded-lg p-6 shadow-md"
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <feature.icon
                            className={`w-6 h-6 text-${feature.color}-500`}
                          />
                          <h4 className="text-lg font-semibold">
                            {feature.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md mt-6">
                    <h4 className="text-xl font-semibold mb-4">
                      How to Use ScrapSaathi
                    </h4>
                    <ol className="space-y-4">
                      {[
                        {
                          title: "Create Your Account",
                          description:
                            "Sign up with your details and verify your account",
                        },
                        {
                          title: "Schedule a Pickup",
                          description:
                            "Choose a convenient time and list your recyclables",
                        },
                        {
                          title: "Prepare Your Waste",
                          description:
                            "Sort and clean your recyclables according to guidelines",
                        },
                        {
                          title: "Get Paid",
                          description:
                            "Receive payment directly to your preferred payment method",
                        },
                      ].map((step, index) => (
                        <li
                          key={step.title}
                          className="flex items-start space-x-3"
                        >
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                            {index + 1}
                          </span>
                          <div>
                            <p className="font-medium">{step.title}</p>
                            <p className="text-sm text-gray-600">
                              {step.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {/* Tips Tab */}
            {activeTab === "tips" && (
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Daily Tips & Tricks
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Reduce",
                      tips: [
                        "Use reusable bags",
                        "Buy in bulk",
                        "Choose minimal packaging",
                      ],
                    },
                    {
                      title: "Reuse",
                      tips: [
                        "Repair items",
                        "Donate usable goods",
                        "Use refillable containers",
                      ],
                    },
                  ].map((section) => (
                    <div
                      key={section.title}
                      className="bg-white rounded-lg p-4 shadow-md"
                    >
                      <h4 className="font-semibold mb-2">{section.title}</h4>
                      <ul className="space-y-2">
                        {section.tips.map((tip) => (
                          <li key={tip} className="flex items-center space-x-2">
                            <Leaf className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Impact Tab */}
            {activeTab === "impact" && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Environmental Impact
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      label: "Waste Recycled",
                      value: "245 kg",
                      color: "emerald",
                    },
                    { label: "Trees Saved", value: "12", color: "green" },
                    { label: "CO₂ Reduced", value: "180 kg", color: "teal" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className={`bg-${stat.color}-50 rounded-lg p-4 text-center shadow-md`}
                    >
                      <span className="block text-2xl font-bold text-gray-800">
                        {stat.value}
                      </span>
                      <span className="text-sm text-gray-600">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
