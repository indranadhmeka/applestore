import React from "react";
import { Link } from "react-router-dom";

const TvProductCard = ({ product }) => (
  <div className="text-center border rounded-2xl shadow-sm hover:shadow-lg transition p-6">
    <img
      src={product.image}
      alt={product.name}
      className="mx-auto w-48 h-48 object-contain mb-4"
    />
    <h3 className="text-xl font-semibold">{product.name}</h3>
    <Link
      to={product.link}
      className="text-blue-600 font-medium mt-2 inline-block hover:underline"
    >
      View details
    </Link>
  </div>
);

export default TvProductCard;
