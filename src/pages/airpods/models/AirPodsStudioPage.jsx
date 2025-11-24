import React from "react";
import { Link } from "react-router-dom";

const AirPodsStudioPage = () => {
  return (
    <div className="bg-white text-center py-20">
      <img src="/images/airpods-studio.png" alt="AirPods Studio" className="mx-auto w-1/3 mb-8" />
      <h1 className="text-4xl font-bold mb-2">AirPods Studio</h1>
      <p className="text-gray-600 mb-4">₹49,999 — Professional studio-grade sound.</p>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
        Designed for creators and audiophiles. AirPods Studio deliver rich bass, 
        crisp highs, and precision-balanced mids for a perfect mix experience.
      </p>

      <div className="flex justify-center gap-6">
        <Link to="/learn/airpods-studio" className="text-blue-600 hover:underline">
          Learn more
        </Link>
        <Link to="/buy/airpods-studio" className="text-blue-600 hover:underline">
          Buy
        </Link>
      </div>
    </div>
  );
};

export default AirPodsStudioPage;
