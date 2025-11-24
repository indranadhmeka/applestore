import React from "react";

const FreeDelivery = () => {
  return (
    <div className="bg-gray-50 text-center py-20">
      <h1 className="text-4xl font-bold mb-6">Free Delivery & Store Pickup</h1>
      <img
        src="/images/airpods-hero.png"
        alt="Free Delivery"
        className="mx-auto w-1/3 mb-8 rounded-2xl shadow-md"
      />
      <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
        <p>
          Enjoy **free delivery** on every AirPods order. Your purchase will arrive at your doorstep quickly and safely — no hidden charges.
        </p>
        <p>
          Prefer shopping in person? Choose **Apple Store Pickup** and collect your AirPods at your nearest Apple Store the same day.
        </p>
        <p>
          Real-time order tracking is available from your Apple account after checkout.
        </p>
      </div>
    </div>
  );
};

export default FreeDelivery;
