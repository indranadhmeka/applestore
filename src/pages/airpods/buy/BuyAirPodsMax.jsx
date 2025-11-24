import React from "react";

const BuyAirPodsMax = () => {
  return (
    <div className="bg-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Buy AirPods Max</h1>
      <img src="/images/airpods-max.png" alt="AirPods Max" className="mx-auto w-1/3 mb-8" />
      <p className="text-gray-700 text-lg mb-8">Price: ₹59,900</p>

      <h2 className="text-2xl font-semibold mb-4">Available Payment Options</h2>
      <ul className="max-w-md mx-auto text-left text-gray-700 text-lg space-y-3 mb-8">
        <li>💳 Credit / Debit Card Payments</li>
        <li>📱 UPI Apps</li>
        <li>🏦 Net Banking</li>
        <li>💰 EMI (0% for select banks)</li>
      </ul>

      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
        Continue to Checkout
      </button>
    </div>
  );
};

export default BuyAirPodsMax;
