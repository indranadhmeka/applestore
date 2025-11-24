import React from "react";

const plans = [
  { type: "2 BHK", cost: "₹1,20,000", features: "Basic automation setup" },
  { type: "3 BHK", cost: "₹1,80,000", features: "Mid-level smart integration" },
  { type: "4 BHK", cost: "₹2,40,000", features: "Full home automation" },
  { type: "5 BHK", cost: "₹3,00,000", features: "Advanced smart system" },
  { type: "6 BHK", cost: "₹3,60,000", features: "Luxury-level automation" },
];

const SmartHomePlanSection = () => (
  <section className="py-20 px-8">
    <h2 className="text-4xl font-semibold text-center mb-8">
      A smarter home — installed your way.
    </h2>
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
      {plans.map((plan) => (
        <div
          key={plan.type}
          className="border rounded-xl shadow-md p-6 text-center hover:scale-105 transition"
        >
          <h3 className="text-2xl font-bold">{plan.type}</h3>
          <p className="text-gray-600 mt-2">{plan.features}</p>
          <p className="text-xl font-semibold text-green-600 mt-4">{plan.cost}</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">
            View Design
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default SmartHomePlanSection;
