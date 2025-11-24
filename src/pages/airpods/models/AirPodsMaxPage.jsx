import React from "react";
import { Link } from "react-router-dom";

const AirPodsMaxPage = () => {
  return (
    <div className="bg-white text-center py-20">
      <img src="/images/airpods-max.png" alt="AirPods Max" className="mx-auto w-1/3 mb-8" />
      <h1 className="text-4xl font-bold mb-2">AirPods Max</h1>
      <p className="text-gray-600 mb-4">₹59,900 — Over-ear headphones reimagined.</p>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
        AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation. 
        Every detail crafted for exceptional comfort and immersive sound.
      </p>

      <div className="flex justify-center gap-6">
        <Link to="/learn/airpods-max" className="text-blue-600 hover:underline">
          Learn more
        </Link>
        <Link to="/buy/airpods-max" className="text-blue-600 hover:underline">
          Buy
        </Link>
      </div>
    </div>
  );
};

export default AirPodsMaxPage;
