import React from "react";
import { Link } from "react-router-dom";

const ModelTemplate = ({ title, description, price, features, image }) => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800">
      {/* Product Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <p className="text-2xl font-semibold mb-6">Starting at {price}</p>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <li
                key={index}
                className="bg-white shadow-sm rounded-xl p-4 border border-gray-100"
              >
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/payment"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Buy Now
            </Link>
            <Link
              to="/learn"
              className="border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelTemplate;
