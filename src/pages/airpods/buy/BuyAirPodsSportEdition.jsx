import React from "react";

const BuyAirPodsSportEdition = () => {
  return (
    <div className="bg-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Buy AirPods Sport Edition</h1>
      <img src="/images/airpods-sport.png" alt="AirPods Sport Edition" className="mx-auto w-1/3 mb-8" />
      <p className="text-gray-700 text-lg mb-8">Price: ₹15,999</p>

      <ul className="max-w-md mx-auto text-left text-gray-700 text-lg space-y-3 mb-8">
        <li>💳 Credit / Debit Cards</li>
        <li>📱 UPI (GPay, PhonePe, Paytm)</li>
        <li>🏦 Net Banking</li>
        <li>💰 No-Cost EMI Available</li>
      </ul>

      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
        Buy Now
      </button>
    </div>
  );
};

export default BuyAirPodsSportEdition;
