// src/components/PaymentOptions.jsx
import React from "react";

const PaymentOptions = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Easy Ways to Pay</h2>
      <p className="text-gray-600 mb-8">
        Choose your preferred payment method for a smooth checkout experience.
      </p>
      <div className="max-w-xl mx-auto text-left">
        <ul className="text-lg space-y-3">
          <li>💳 Credit / Debit Cards</li>
          <li>📱 UPI Payments</li>
          <li>🏦 Net Banking</li>
          <li>💰 EMI Options Available</li>
        </ul>
      </div>
    </section>
  );
};

export default PaymentOptions;
