// src/components/FeaturedProducts.jsx
import React from "react";
import featuredProducts from "../data/featuredProducts";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-gray-900 font-bold mt-2">{product.price}</p>
        <div className="flex gap-4 mt-4">
  <button
    onClick={() => navigate("/learn")}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
  >
    Learn
  </button>

  <button
    onClick={() => navigate("/payment")}
    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
  >
    Buy
  </button>
</div>

  
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
