import { useState } from "react";
import { motion } from "framer-motion";

export default function SupportUs() {
  const [donation, setDonation] = useState({
    cause: "treePlantation",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation((prev) => ({ ...prev, [name]: value }));
  };

  const handleDonate = (e) => {
    e.preventDefault();
    if (!donation.amount || Number(donation.amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    alert(
      `🙏 Thank you for supporting: ${donation.cause}! Amount: ₹${donation.amount}`
    );
  };

  const causes = [
    {
      key: "treePlantation",
      label: "Tree Plantation",
      img: "https://cdn.pixabay.com/photo/2016/04/22/22/01/earth-1342813_960_720.png",
    },
    {
      key: "ngos",
      label: "NGOs for Environment",
      img: "https://cdn.pixabay.com/photo/2017/01/31/14/43/volunteers-2027566_960_720.png",
    },
    {
      key: "wildlifeProtection",
      label: "Wildlife Protection",
      img: "https://cdn.pixabay.com/photo/2016/12/13/08/12/nature-1907195_960_720.jpg",
    },
    {
      key: "oceanCleanup",
      label: "Ocean Cleanup",
      img: "https://cdn.pixabay.com/photo/2017/06/30/20/17/hand-2458631_960_720.jpg",
    },
  ];

  const donationAmounts = ["100", "500", "1000"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-green-400 to-blue-500 p-10 mt-16">
      <motion.div
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Support Environmental Causes 🌍
        </h2>

        {/* Causes Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Where Your Donation Helps
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {causes.map((cause) => (
              <motion.div
                key={cause.key}
                className={`p-4 border rounded-lg cursor-pointer transition duration-300 transform ${
                  donation.cause === cause.key
                    ? "border-green-500 scale-105 shadow-lg"
                    : "hover:scale-105"
                }`}
                onClick={() => setDonation({ ...donation, cause: cause.key })}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={cause.img}
                  alt={cause.label}
                  className="w-full h-32 object-cover rounded-md"
                />
                <p className="text-center font-semibold mt-2">{cause.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Donation Form */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Make a Difference Today
          </h3>
          <form onSubmit={handleDonate} className="flex flex-col gap-4">
            <label className="text-gray-700 font-semibold">
              Choose Donation Amount (₹)
            </label>
            <div className="grid grid-cols-3 gap-4">
              {donationAmounts.map((amount) => (
                <motion.button
                  key={amount}
                  type="button"
                  className={`p-3 border rounded-lg font-semibold transition duration-300 ${
                    donation.amount === amount
                      ? "bg-green-500 text-white shadow-md"
                      : "hover:bg-green-100"
                  }`}
                  onClick={() => setDonation({ ...donation, amount })}
                  whileTap={{ scale: 0.95 }}
                >
                  ₹{amount}
                </motion.button>
              ))}
            </div>

            {/* Custom Amount */}
            <input
              type="number"
              name="amount"
              placeholder="Enter Custom Amount"
              value={donation.amount}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500"
              min="10"
              required
            />

            <motion.button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now 🙌
            </motion.button>
          </form>
        </section>

        {/* Thank You Message */}
        <div className="mt-6 text-sm text-gray-600 text-center">
          <p>
            Every contribution makes a difference. <strong>Thank you</strong>{" "}
            for being a part of a greener future! 💚🌱
          </p>
        </div>
      </motion.div>
    </div>
  );
}
