import React from "react";
import { Link } from "react-router-dom";

const AirPodsSportEditionPage = () => {
  return (
    <div className="bg-white text-center py-20">
      <img src="/images/airpods-sport.png" alt="AirPods Sport Edition" className="mx-auto w-1/3 mb-8" />
      <h1 className="text-4xl font-bold mb-2">AirPods Sport Edition</h1>
      <p className="text-gray-600 mb-4">₹15,999 — Built for fitness and performance.</p>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
        Sweat and water resistant, with enhanced grip and long battery life. 
        Stay active and motivated with powerful sound in every move.
      </p>

      <div className="flex justify-center gap-6">
        <Link to="/learn/airpods-sport-edition" className="text-blue-600 hover:underline">
          Learn more
        </Link>
        <Link to="/buy/airpods-sport-edition" className="text-blue-600 hover:underline">
          Buy
        </Link>
      </div>
    </div>
  );
};

export default AirPodsSportEditionPage;
