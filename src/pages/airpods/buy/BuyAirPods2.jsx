import React from "react";

const BuyAirPods2 = () => {
  return (
    <div className="bg-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Buy AirPods (2nd Gen)</h1>
      <img src="/images/airpods2.png" alt="AirPods 2" className="mx-auto w-1/3 mb-8" />
      <p className="text-gray-700 text-lg mb-8">Price: ₹12,900</p>

      <ul className="max-w-md mx-auto text-left text-gray-700 text-lg space-y-3 mb-8">
        <li>💳 Credit / Debit Cards</li>
        <li>📱 UPI Payment</li>
        <li>🏦 Net Banking</li>
        <li>💰 EMI Available</li>
      </ul>

      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
        Pay Now
      </button>
    </div>
  );
};

export default BuyAirPods2;
