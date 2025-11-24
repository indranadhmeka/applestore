import React from "react";

const TradeSection = () => {
  return (
    <section className="bg-blue-50 py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Trade In & Save More</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Exchange your old Apple Watch and save up to ₹15,000 on a new one.  
        Add AppleCare+ for extended coverage and peace of mind.
      </p>
      <img
        src="/images/trade.png"
        alt="Trade In"
        className="mx-auto w-64 mt-6"
      />
      <button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-700">
        Learn More
      </button>
    </section>
  );
};

export default TradeSection;
