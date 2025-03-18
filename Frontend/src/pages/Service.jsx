import React from "react";
import {
  AcademicCapIcon,
  TruckIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

function Service() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          ScrapSathi offers a comprehensive range of waste management and
          recycling services designed to make your life easier and the planet
          greener. Whether you're a household, business, or community, we have a
          solution for you.
        </p>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
          {/* Service 1: Sustainable Waste Management */}
          <div className="bg-white shadow-xl rounded-lg p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <AcademicCapIcon className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Sustainable Waste Management
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Our Sustainable Waste Management service is designed to help you
              dispose of waste in an eco-friendly manner. We ensure that all
              types of waste are handled responsibly to minimize environmental
              impact.
            </p>
            <div className="mt-6 text-left">
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Customized waste collection schedules</li>
                <li>Efficient disposal of recyclables and non-recyclables</li>
                <li>Minimizing waste sent to landfills</li>
              </ul>
            </div>
          </div>

          {/* Service 2: On-Demand Pickup */}
          <div className="bg-white shadow-xl rounded-lg p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <TruckIcon className="h-16 w-16 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              On-Demand Pickup
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              No more waiting around! Our On-Demand Pickup service lets you
              schedule waste collection at a time that’s most convenient for
              you, helping you stay organized and clutter-free.
            </p>
            <div className="mt-6 text-left">
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Flexible scheduling for pickups</li>
                <li>Available for residential and commercial clients</li>
                <li>Easy-to-use app for booking</li>
              </ul>
            </div>
          </div>

          {/* Service 3: Expert Recycling */}
          <div className="bg-white shadow-xl rounded-lg p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <ArrowPathIcon className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Expert Recycling
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Our Expert Recycling service ensures that all your recyclable
              waste is properly sorted and processed. We help reduce landfill
              waste and promote the circular economy.
            </p>
            <div className="mt-6 text-left">
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Recycling of plastic, metal, paper, and e-waste</li>
                <li>Specialized recycling for hazardous materials</li>
                <li>Partnered with local recycling facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* More Info Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800">
            Why Choose ScrapSathi?
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We’re more than just a waste management company. We are your
            partners in creating a cleaner, greener, and more sustainable
            future. Here’s why ScrapSathi is the right choice for you:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {/* Reason 1 */}
            <div className="bg-white shadow-xl rounded-lg p-8">
              <h4 className="text-xl font-semibold text-gray-800">
                Eco-Friendly Solutions
              </h4>
              <p className="mt-4 text-lg text-gray-600">
                We focus on sustainable methods and ensure that all waste is
                handled with the utmost care for the environment.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white shadow-xl rounded-lg p-8">
              <h4 className="text-xl font-semibold text-gray-800">
                Convenience
              </h4>
              <p className="mt-4 text-lg text-gray-600">
                With on-demand services and flexible scheduling, we make waste
                management convenient for you.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white shadow-xl rounded-lg p-8">
              <h4 className="text-xl font-semibold text-gray-800">
                Affordable Pricing
              </h4>
              <p className="mt-4 text-lg text-gray-600">
                We offer competitive pricing without compromising on service
                quality. Affordable, reliable, and sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Service;
