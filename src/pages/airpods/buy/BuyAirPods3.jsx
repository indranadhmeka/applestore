import React from "react";

const BuyAirPods3 = () => {
  return (
    <div className="bg-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Buy AirPods (3rd Gen)</h1>
      <img src="/images/airpods3.png" alt="AirPods 3" className="mx-auto w-1/3 mb-8" />
      <p className="text-gray-700 text-lg mb-8">Price: ₹19,900</p>

      <h2 className="text-2xl font-semibold mb-4">Payment Options</h2>
      <ul className="max-w-md mx-auto text-left text-gray-700 text-lg space-y-3 mb-8">
        <li>💳 Credit / Debit Cards</li>
        <li>📱 UPI Payments</li>
        <li>🏦 Net Banking</li>
        <li>💰 EMI Options Available</li>
      </ul>

      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
        Proceed to Payment
      </button>
    </div>
  );
};

export default BuyAirPods3;
