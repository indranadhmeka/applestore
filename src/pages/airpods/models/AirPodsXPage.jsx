import React from "react";
import { Link } from "react-router-dom";

const AirPodsXPage = () => {
  return (
    <div className="bg-white text-center py-20">
      <img src="/images/airpods-x.png" alt="AirPods X" className="mx-auto w-1/3 mb-8" />
      <h1 className="text-4xl font-bold mb-2">AirPods X</h1>
      <p className="text-gray-600 mb-4">₹39,999 — Futuristic design meets innovation.</p>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
        AirPods X offer exceptional clarity and design with integrated sensors, 
        advanced sound tuning, and gesture control.
      </p>

      <div className="flex justify-center gap-6">
        <Link to="/learn/airpods-x" className="text-blue-600 hover:underline">
          Learn more
        </Link>
        <Link to="/buy/airpods-x" className="text-blue-600 hover:underline">
          Buy
        </Link>
      </div>
    </div>
  );
};

export default AirPodsXPage;
