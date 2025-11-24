import React from "react";

const WaysToBuy = () => {
  return (
    <div className="bg-white text-center py-20">
      <h1 className="text-4xl font-bold mb-6">Ways to Buy</h1>
      <img
        src="/images/airpods-pro2.png"
        alt="Ways to Buy"
        className="mx-auto w-1/3 mb-8 rounded-2xl shadow"
      />
      <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
        <p>
          Buying your new AirPods is now easier than ever. Choose from multiple payment and upgrade options.
        </p>
        <ul className="list-disc list-inside text-left inline-block space-y-2 text-gray-700">
          <li>💳 Credit or Debit Card (Visa, MasterCard, RuPay)</li>
          <li>📱 UPI (Google Pay, PhonePe, Paytm)</li>
          <li>🏦 Net Banking from all major banks</li>
          <li>💰 EMI and No-Cost EMI options</li>
          <li>🔁 Trade-in available for select Apple products</li>
        </ul>
        <p>
          With easy monthly installments and instant digital payments, your AirPods purchase fits right into your lifestyle.
        </p>
      </div>
    </div>
  );
};

export default WaysToBuy;
