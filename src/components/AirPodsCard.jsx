// src/components/AirPodsCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const AirPodsCard = ({ image, name, price }) => {
  const modelPath = name.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300">
      <img src={image} alt={name} className="mx-auto w-40 mb-4" />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-500 mb-3">{price}</p>
      <div className="flex justify-center gap-6">
        <Link
          to={`/learn/${modelPath}`}
          className="text-blue-600 hover:underline font-medium"
        >
          Learn more
        </Link>
        <Link
          to={`/buy/${modelPath}`}
          className="text-blue-600 hover:underline font-medium"
        >
          Buy
        </Link>
      </div>
    </div>
  );
};

export default AirPodsCard;
