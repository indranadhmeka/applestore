// src/pages/models/Iphone16Page.jsx
import React from "react";

const Iphone16Page = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-10">
      {/* Title and Price */}
      <h1 className="text-4xl font-bold mb-2 text-gray-900">iPhone 16 Pro</h1>
      <p className="text-xl text-gray-700 mb-8">Starting from ₹1,49,900</p>

      {/* Product Images */}
      <div className="flex flex-wrap gap-6 mb-10">
        <img
          src="/images/products/iphone16pro_1.jpg"
          alt="iPhone 16 Pro Front"
          className="w-72 rounded-2xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/images/products/iphone16pro_2.jpg"
          alt="iPhone 16 Pro Back"
          className="w-72 rounded-2xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/images/products/iphone16pro_3.jpg"
          alt="iPhone 16 Pro Side"
          className="w-72 rounded-2xl shadow-md hover:scale-105 transition-transform"
        />
      </div>

      {/* Features */}
      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Key Features</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>A18 Pro chip for next-level performance</li>
        <li>48MP Pro camera system with 5x optical zoom</li>
        <li>Super Retina XDR display — 120Hz ProMotion</li>
        <li>Titanium body with USB-C support</li>
        <li>All-day battery life and 5G connectivity</li>
      </ul>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed max-w-3xl mb-10">
        The iPhone 16 Pro redefines smartphone technology with the blazing-fast
        A18 Pro chip, advanced camera capabilities, and a premium titanium
        finish. Experience Pro-level photography, high-end gaming, and
        ultra-smooth performance — all wrapped in a design that’s both powerful
        and elegant.
      </p>

      {/* Learn More Button */}
      <div className="mt-8">
        <a
          href="/paymentpage"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-colors"
        >
          Buy with UPI / Card / EMI
        </a>
      </div>
    </div>
  );
};

export default Iphone16Page;
