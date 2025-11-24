import React from "react";
import { Link } from "react-router-dom";

const AirPods3Page = () => {
  return (
    <div className="bg-white text-center py-20">
      <img src="/images/airpods3.png" alt="AirPods (3rd Gen)" className="mx-auto w-1/3 mb-8" />
      <h1 className="text-4xl font-bold mb-2">AirPods (3rd Gen)</h1>
      <p className="text-gray-600 mb-4">₹19,900 — Spatial Audio and Sweat Resistance.</p>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
        AirPods (3rd Gen) bring you a whole new way to listen with immersive Spatial Audio, 
        Adaptive EQ, and a redesigned fit. Up to 6 hours of listening time.
      </p>

      <div className="flex justify-center gap-6">
        <Link to="/learn/airpods3" className="text-blue-600 hover:underline">
          Learn more
        </Link>
        <Link to="/buy/airpods3" className="text-blue-600 hover:underline">
          Buy
        </Link>
      </div>
    </div>
  );
};

export default AirPods3Page;
