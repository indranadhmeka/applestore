import React from "react";

const WatchUltra2Page = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Apple Watch Ultra 2</h1>
      <p className="text-gray-700 mb-4 text-lg">₹89,900</p>

      <div className="flex flex-wrap gap-4 mb-6">
        <img src="/images/products/watchultra2_1.jpg" alt="Apple Watch Ultra 2" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/watchultra2_2.jpg" alt="Apple Watch Ultra 2" className="w-60 rounded-xl shadow-md" />
        <img src="/images/products/watchultra2_3.jpg" alt="Apple Watch Ultra 2" className="w-60 rounded-xl shadow-md" />
      </div>

      <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>49mm Titanium Case</li>
        <li>Up to 36-hour battery life</li>
        <li>Double Tap gesture control</li>
        <li>Precision dual-frequency GPS</li>
      </ul>

      <p className="text-gray-600 max-w-3xl">
        Built for adventurers, the Apple Watch Ultra 2 offers extreme durability, precision tracking, and health innovations for every explorer.
      </p>
    </div>
  );
};

export default WatchUltra2Page;
