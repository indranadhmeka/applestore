import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded-2xl p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-gray-800 font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-2">{product.category}</p>
      <p className="text-blue-600 font-semibold mb-4">₹{product.price}</p>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
