import React from "react";
import { Link } from "react-router-dom";

const AirPodsPro2Page = () => {
  return (
    <div className="bg-white text-center py-20">
      <img
        src="/images/airpods-pro2.png"
        alt="AirPods Pro (2nd Gen)"
        className="mx-auto w-1/3 mb-8"
      />
      <h1 className="text-4xl font-bold mb-2">AirPods Pro (2nd Gen)</h1>
      <p className="text-gray-600 mb-4">₹24,900 — with Active Noise Cancellation and Transparency Mode.</p>

      <div className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
        <p>
          Experience next-level audio with Adaptive EQ, Spatial Audio, and personalized fit. 
          Designed for comfort and powered by the Apple H2 chip.
        </p>
      </div>

      <div className="flex justify-center gap-6">
        <Link to="/learn/airpods-pro-2" className="text-blue-600 hover:underline">
          Learn more
        </Link>
        <Link to="/buy/airpods-pro-2" className="text-blue-600 hover:underline">
          Buy
        </Link>
      </div>
    </div>
  );
};

export default AirPodsPro2Page;
