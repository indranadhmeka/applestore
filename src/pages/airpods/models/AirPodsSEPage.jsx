import React from "react";
import { Link } from "react-router-dom";

const AirPodsSEPage = () => {
  return (
    <div className="bg-white text-center py-20">
      <img src="/images/airpods-se.png" alt="AirPods SE" className="mx-auto w-1/3 mb-8" />
      <h1 className="text-4xl font-bold mb-2">AirPods SE</h1>
      <p className="text-gray-600 mb-4">₹11,499 — Small in size, big in sound.</p>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
        Compact, comfortable, and affordable — AirPods SE deliver crisp sound with long-lasting 
        battery and instant device pairing.
      </p>

      <div className="flex justify-center gap-6">
        <Link to="/learn/airpods-se" className="text-blue-600 hover:underline">
          Learn more
        </Link>
        <Link to="/buy/airpods-se" className="text-blue-600 hover:underline">
          Buy
        </Link>
      </div>
    </div>
  );
};

export default AirPodsSEPage;
