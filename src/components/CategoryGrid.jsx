import React from "react";
import { Link } from "react-router-dom";
import categories from "../data/categories";

const CategoryGrid = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Explore Apple Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <div className="w-full h-36 sm:h-40 md:h-44 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-gray-800 font-medium group-hover:text-blue-600">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
