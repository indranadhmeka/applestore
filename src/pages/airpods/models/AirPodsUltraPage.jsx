import React from "react";
import { Link } from "react-router-dom";

const AirPodsUltraPage = () => {
  return (
    <div className="bg-white text-center py-20">
      <img src="/images/airpods-ultra.png" alt="AirPods Ultra" className="mx-auto w-1/3 mb-8" />
      <h1 className="text-4xl font-bold mb-2">AirPods Ultra</h1>
      <p className="text-gray-600 mb-4">₹69,999 — The ultimate listening experience.</p>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
        Experience ultra-high fidelity sound, adaptive noise control, and titanium build. 
        AirPods Ultra redefine what premium wireless audio can be.
      </p>

      <div className="flex justify-center gap-6">
        <Link to="/learn/airpods-ultra" className="text-blue-600 hover:underline">
          Learn more
        </Link>
        <Link to="/buy/airpods-ultra" className="text-blue-600 hover:underline">
          Buy
        </Link>
      </div>
    </div>
  );
};

export default AirPodsUltraPage;
