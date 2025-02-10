import React from "react";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Stats from "../components/Stats";
import Features from "../components/Feature";

function Home() {
  return (
    <div className="font-sans bg-gray-100">
      <Hero />
      <Mission />
      <Stats />
      <Features />
    </div>
  );
}

export default Home;
