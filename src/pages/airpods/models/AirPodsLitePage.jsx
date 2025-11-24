import React from "react";
import { Link } from "react-router-dom";

const AirPodsLitePage = () => {
  return (
    <div className="bg-white text-center py-20">
      <img src="/images/airpods-lite.png" alt="AirPods Lite" className="mx-auto w-1/3 mb-8" />
      <h1 className="text-4xl font-bold mb-2">AirPods Lite</h1>
      <p className="text-gray-600 mb-4">₹8,999 — Simple sound for everyone.</p>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
        AirPods Lite deliver great sound and reliable connection in a minimal, lightweight design. 
        The perfect entry into the AirPods family.
      </p>

      <div className="flex justify-center gap-6">
        <Link to="/learn/airpods-lite" className="text-blue-600 hover:underline">
          Learn more
        </Link>
        <Link to="/buy/airpods-lite" className="text-blue-600 hover:underline">
          Buy
        </Link>
      </div>
    </div>
  );
};

export default AirPodsLitePage;
