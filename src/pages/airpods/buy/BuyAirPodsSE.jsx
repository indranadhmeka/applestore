import React from "react";

const BuyAirPodsSE = () => {
  return (
    <div className="bg-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Buy AirPods SE</h1>
      <img src="/images/airpods-se.png" alt="AirPods SE" className="mx-auto w-1/3 mb-8" />
      <p className="text-gray-700 text-lg mb-8">Price: ₹11,499</p>

      <ul className="max-w-md mx-auto text-left text-gray-700 text-lg space-y-3 mb-8">
        <li>💳 Debit / Credit Cards</li>
        <li>📱 UPI Payments</li>
        <li>🏦 Net Banking</li>
        <li>💰 EMI available for 3 or 6 months</li>
      </ul>

      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
        Proceed to Pay
      </button>
    </div>
  );
};

export default BuyAirPodsSE;
