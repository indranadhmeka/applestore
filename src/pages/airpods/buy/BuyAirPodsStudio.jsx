import React from "react";

const BuyAirPodsStudio = () => {
  return (
    <div className="bg-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Buy AirPods Studio</h1>
      <img src="/images/airpods-studio.png" alt="AirPods Studio" className="mx-auto w-1/3 mb-8" />
      <p className="text-gray-700 text-lg mb-8">Price: ₹49,999</p>

      <h2 className="text-2xl font-semibold mb-4">Select Payment Method</h2>
      <ul className="max-w-md mx-auto text-left text-gray-700 text-lg space-y-3 mb-8">
        <li>💳 Credit / Debit Cards</li>
        <li>📱 UPI</li>
        <li>🏦 Net Banking</li>
        <li>💰 EMI (6/9/12 months)</li>
      </ul>

      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
        Confirm Purchase
      </button>
    </div>
  );
};

export default BuyAirPodsStudio;
