import React from "react";

const BuyAirPodsX = () => {
  return (
    <div className="bg-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Buy AirPods X</h1>
      <img src="/images/airpods-x.png" alt="AirPods X" className="mx-auto w-1/3 mb-8" />
      <p className="text-gray-700 text-lg mb-8">Price: ₹39,999</p>

      <ul className="max-w-md mx-auto text-left text-gray-700 text-lg space-y-3 mb-8">
        <li>💳 Credit / Debit Cards</li>
        <li>📱 UPI Apps</li>
        <li>🏦 Internet Banking</li>
        <li>💰 EMI up to 12 months</li>
      </ul>

      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
        Complete Payment
      </button>
    </div>
  );
};

export default BuyAirPodsX;
