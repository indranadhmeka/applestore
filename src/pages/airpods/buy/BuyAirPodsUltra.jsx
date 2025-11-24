import React from "react";

const BuyAirPodsUltra = () => {
  return (
    <div className="bg-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Buy AirPods Ultra</h1>
      <img src="/images/airpods-ultra.png" alt="AirPods Ultra" className="mx-auto w-1/3 mb-8" />
      <p className="text-gray-700 text-lg mb-8">Price: ₹69,999</p>

      <ul className="max-w-md mx-auto text-left text-gray-700 text-lg space-y-3 mb-8">
        <li>💳 Credit / Debit Card Payments</li>
        <li>📱 UPI (Google Pay, PhonePe)</li>
        <li>🏦 Net Banking</li>
        <li>💰 EMI up to 18 months</li>
      </ul>

      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default BuyAirPodsUltra;
