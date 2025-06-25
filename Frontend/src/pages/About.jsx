import React from "react";

function About() {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <section className="min-h-[40vh] bg-gradient-to-r from-green-500 to-blue-500 text-white flex-col flex items-center justify-center relative mt-20 p-5">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="text-lg mt-4">
            We are on a mission to make the world a cleaner and greener place by
            providing easy-to-use waste management solutions.
          </p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At ScrapSathi, our mission is to provide innovative and sustainable
            waste management solutions that make it easier for households and
            businesses to manage their waste responsibly. Our goal is to reduce
            landfill waste, promote recycling, and ensure a cleaner environment
            for future generations.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A group of passionate individuals working towards a cleaner future.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 mt-12">
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="/images/dp_logo.jpg"
                alt="Team Member"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Aman Kumar
              </h3>
              <p className="text-gray-600">Co-Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="/images/dp_logo.jpg"
                alt="Team Member"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Pranav Raj
              </h3>
              <p className="text-gray-600">Co-Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our values are at the heart of everything we do. We believe in
            sustainability, innovation, transparency, and a commitment to a
            cleaner future.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
            <div className="bg-white shadow-xl rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Sustainability
              </h3>
              <p className="text-gray-600 mt-4">
                We prioritize eco-friendly solutions to minimize environmental
                impact.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Innovation
              </h3>
              <p className="text-gray-600 mt-4">
                Constantly seeking new and better ways to manage waste and
                reduce waste generation.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Transparency
              </h3>
              <p className="text-gray-600 mt-4">
                We believe in being clear and open about our processes and
                impact.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800">Community</h3>
              <p className="text-gray-600 mt-4">
                We believe in working together to build a cleaner and more
                sustainable world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20  text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Get In Touch</h2>
          <p className="mt-4 text-lg">
            Have any questions? Reach out to us, and we would assist you in
            any way we can.
          </p>
          <a
            href="mailto:raj989135@gmail.com"
            className="mt-6 inline-block bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-800 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
