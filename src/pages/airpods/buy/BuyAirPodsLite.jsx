import React from "react";

const BuyAirPodsLite = () => {
  return (
    <div className="bg-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Buy AirPods Lite</h1>
      <img src="/images/airpods-lite.png" alt="AirPods Lite" className="mx-auto w-1/3 mb-8" />
      <p className="text-gray-700 text-lg mb-8">Price: ₹8,999</p>

      <ul className="max-w-md mx-auto text-left text-gray-700 text-lg space-y-3 mb-8">
        <li>💳 Debit / Credit Cards</li>
        <li>📱 UPI (Paytm, PhonePe, Google Pay)</li>
        <li>🏦 Net Banking</li>
        <li>💰 EMI starting ₹499/month</li>
      </ul>

      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
        Checkout
      </button>
    </div>
  );
};

export default BuyAirPodsLite;
