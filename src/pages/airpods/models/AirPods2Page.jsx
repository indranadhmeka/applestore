import React from "react";
import { Link } from "react-router-dom";

const AirPods2Page = () => {
  return (
    <div className="bg-white text-center py-20">
      <img src="/images/airpods2.png" alt="AirPods (2nd Gen)" className="mx-auto w-1/3 mb-8" />
      <h1 className="text-4xl font-bold mb-2">AirPods (2nd Gen)</h1>
      <p className="text-gray-600 mb-4">₹12,900 — Classic. Simple. Magical.</p>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
        The original AirPods experience — easy setup, automatic switching, and effortless 
        audio for all your Apple devices.
      </p>

      <div className="flex justify-center gap-6">
        <Link to="/learn/airpods2" className="text-blue-600 hover:underline">
          Learn more
        </Link>
        <Link to="/buy/airpods2" className="text-blue-600 hover:underline">
          Buy
        </Link>
      </div>
    </div>
  );
};

export default AirPods2Page;
