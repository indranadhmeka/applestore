import React from "react";

const WatchCard = ({ name, price, img, feature }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
      <img src={img} alt={name} className="mx-auto w-48 h-48 object-contain" />
      <h2 className="text-2xl font-bold mt-4">{name}</h2>
      <p className="text-gray-600 mt-2">{feature}</p>
      <p className="text-xl font-semibold mt-3">{price}</p>
      <button className="bg-blue-600 text-white w-full py-2 rounded-md mt-4 hover:bg-blue-700">
        Buy Now
      </button>
    </div>
  );
};

export default WatchCard;
